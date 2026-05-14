export function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Authentication token required" });
  }

  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    req.auth = JSON.parse(decoded);
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid authentication token" });
  }
}

export function createToken(payload) {
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}
