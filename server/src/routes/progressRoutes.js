import express from "express";
import { requireAuth } from "../middleware/authMiddleware.js";
import Progress from "../models/Progress.js";

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  const progress = await Progress.findOne({ user: req.auth.id });
  res.json(progress || {});
});

router.put("/", requireAuth, async (req, res) => {
  const progress = await Progress.findOneAndUpdate(
    { user: req.auth.id },
    { ...req.body, user: req.auth.id },
    { upsert: true, new: true, runValidators: true }
  );
  res.json(progress);
});

export default router;
