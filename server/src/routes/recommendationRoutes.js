import express from "express";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", requireAuth, async (req, res) => {
  const { fieldTitle, completedSkills = [], goals = "" } = req.body;
  const fallback = {
    summary: `${fieldTitle || "Your selected field"} is a strong next path based on your profile.`,
    skills: completedSkills.length ? completedSkills.slice(0, 3) : ["Portfolio project", "Interview practice", "GitHub documentation"],
    nextAction: goals ? `Connect your next project to this goal: ${goals}` : "Complete one roadmap milestone this week."
  };

  if (!process.env.OPENAI_API_KEY) {
    return res.json({ provider: "deterministic-fallback", recommendation: fallback });
  }

  return res.json({ provider: "openai-ready", recommendation: fallback });
});

export default router;
