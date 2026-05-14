import { createContext, useContext, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

const AuthContext = createContext(null);

const defaultProfile = {
  image: "",
  bio: "BSCS student exploring modern tech careers in Pakistan.",
  interests: ["React", "Python", "Cloud"],
  selectedCareerPath: "web-development",
  goals: "Get an internship and build a strong portfolio."
};

export function AuthProvider({ children }) {
  const [users, setUsers] = useLocalStorage("careerpath-users", []);
  const [session, setSession] = useLocalStorage("careerpath-session", null);
  const [authLoading, setAuthLoading] = useState(false);

  const currentUser = useMemo(() => {
    if (!session?.email) return null;
    return users.find((user) => user.email === session.email) || null;
  }, [session, users]);

  function signup({ name, email, password }) {
    setAuthLoading(true);
    const normalizedEmail = email.trim().toLowerCase();
    const exists = users.some((user) => user.email === normalizedEmail);
    if (exists) {
      setAuthLoading(false);
      return { ok: false, message: "An account with this email already exists." };
    }
    if (password.length < 6) {
      setAuthLoading(false);
      return { ok: false, message: "Password must be at least 6 characters." };
    }

    const user = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: normalizedEmail,
      password,
      premium: false,
      createdAt: new Date().toISOString(),
      profile: defaultProfile
    };

    setUsers((current) => [...current, user]);
    setSession({ email: normalizedEmail, startedAt: new Date().toISOString() });
    setAuthLoading(false);
    return { ok: true };
  }

  function login({ email, password }) {
    setAuthLoading(true);
    const normalizedEmail = email.trim().toLowerCase();
    const user = users.find((item) => item.email === normalizedEmail && item.password === password);
    if (!user) {
      setAuthLoading(false);
      return { ok: false, message: "Invalid email or password." };
    }
    setSession({ email: normalizedEmail, startedAt: new Date().toISOString() });
    setAuthLoading(false);
    return { ok: true };
  }

  function logout() {
    setSession(null);
  }

  function forgotPassword(email) {
    const exists = users.some((user) => user.email === email.trim().toLowerCase());
    return {
      ok: exists,
      message: exists
        ? "Password reset instructions are ready in this prototype flow."
        : "No account found for this email."
    };
  }

  function updateProfile(updates) {
    if (!currentUser) return;
    setUsers((current) =>
      current.map((user) =>
        user.id === currentUser.id
          ? { ...user, profile: { ...user.profile, ...updates }, name: updates.name || user.name }
          : user
      )
    );
  }

  function upgradeToPremium() {
    if (!currentUser) return;
    setUsers((current) =>
      current.map((user) => (user.id === currentUser.id ? { ...user, premium: true } : user))
    );
  }

  const value = {
    users,
    currentUser,
    isAuthenticated: Boolean(currentUser),
    authLoading,
    signup,
    login,
    logout,
    forgotPassword,
    updateProfile,
    upgradeToPremium
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
