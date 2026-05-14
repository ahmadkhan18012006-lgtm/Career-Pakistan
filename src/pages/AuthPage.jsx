import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export function LoginPage() {
  const { login, authLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function submit(event) {
    event.preventDefault();
    const result = login(form);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    navigate(location.state?.from || "/dashboard");
  }

  return (
    <AuthShell title="Welcome back" subtitle="Login to access your protected career dashboard.">
      <form onSubmit={submit} className="grid gap-4">
        <input className="input-control" type="email" placeholder="Email address" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
        <input className="input-control" type="password" placeholder="Password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required />
        {error && <p className="rounded-2xl bg-rose-50 p-3 text-sm font-bold text-rose-700 dark:bg-rose-400/10 dark:text-rose-300">{error}</p>}
        <button type="submit" className="btn-primary" disabled={authLoading}>{authLoading ? "Checking..." : "Login"}</button>
        <div className="flex justify-between gap-3 text-sm font-bold text-slate-500 dark:text-slate-400">
          <Link to="/signup" className="hover:text-primary">Create account</Link>
          <Link to="/forgot-password" className="hover:text-primary">Forgot password?</Link>
        </div>
      </form>
    </AuthShell>
  );
}

export default function AuthPage({ mode }) {
  if (mode === "signup") return <SignupPage />;
  if (mode === "forgot") return <ForgotPasswordPage />;
  return <LoginPage />;
}

export function SignupPage() {
  const { signup, authLoading } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  function submit(event) {
    event.preventDefault();
    const result = signup(form);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    navigate("/dashboard");
  }

  return (
    <AuthShell title="Create your student profile" subtitle="Save progress, bookmarks, quiz results and recommendations.">
      <form onSubmit={submit} className="grid gap-4">
        <input className="input-control" placeholder="Full name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
        <input className="input-control" type="email" placeholder="Email address" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
        <input className="input-control" type="password" placeholder="Password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required />
        {error && <p className="rounded-2xl bg-rose-50 p-3 text-sm font-bold text-rose-700 dark:bg-rose-400/10 dark:text-rose-300">{error}</p>}
        <button type="submit" className="btn-primary" disabled={authLoading}>{authLoading ? "Creating..." : "Signup"}</button>
        <Link to="/login" className="text-sm font-bold text-slate-500 hover:text-primary dark:text-slate-400">Already have an account?</Link>
      </form>
    </AuthShell>
  );
}

export function ForgotPasswordPage() {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit(event) {
    event.preventDefault();
    setMessage(forgotPassword(email).message);
  }

  return (
    <AuthShell title="Reset password" subtitle="Prototype reset flow with validation and clear feedback.">
      <form onSubmit={submit} className="grid gap-4">
        <input className="input-control" type="email" placeholder="Email address" value={email} onChange={(event) => setEmail(event.target.value)} required />
        {message && <p className="rounded-2xl bg-blue-50 p-3 text-sm font-bold text-primary dark:bg-blue-400/10 dark:text-blue-300">{message}</p>}
        <button type="submit" className="btn-primary">Send reset instructions</button>
        <Link to="/login" className="text-sm font-bold text-slate-500 hover:text-primary dark:text-slate-400">Back to login</Link>
      </form>
    </AuthShell>
  );
}

function AuthShell({ title, subtitle, children }) {
  return (
    <PageShell>
      <section className="page-section">
        <div className="container-page grid min-h-[70vh] place-items-center">
          <div className="glass-card w-full max-w-lg p-6 sm:p-8">
            <span className="eyebrow">Secure account</span>
            <h1 className="mt-4 text-3xl font-black dark:text-white">{title}</h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">{subtitle}</p>
            <div className="mt-6">{children}</div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
