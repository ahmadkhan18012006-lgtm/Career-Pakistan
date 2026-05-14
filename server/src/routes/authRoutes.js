import crypto from "crypto";
import express from "express";
import User from "../models/User.js";
import { createToken, requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password || password.length < 6) {
    return res.status(400).json({ message: "Name, valid email and 6+ character password are required" });
  }

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) {
    return res.status(409).json({ message: "User already exists" });
  }

  const user = await User.create({ name, email, passwordHash: hashPassword(password) });
  const token = createToken({ id: user._id.toString(), email: user.email });
  return res.status(201).json({ token, user });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email?.toLowerCase() });

  if (!user || user.passwordHash !== hashPassword(password || "")) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = createToken({ id: user._id.toString(), email: user.email });
  return res.json({ token, user });
});

router.post("/forgot-password", async (req, res) => {
  const user = await User.findOne({ email: req.body.email?.toLowerCase() });
  return res.json({
    ok: Boolean(user),
    message: "If this email exists, reset instructions will be sent."
  });
});

router.get("/me", requireAuth, async (req, res) => {
  const user = await User.findById(req.auth.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  return res.json(user);
});

export default router;
