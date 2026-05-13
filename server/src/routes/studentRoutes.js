import express from "express";
import QuizResult from "../models/QuizResult.js";
import StudentProfile from "../models/StudentProfile.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const student = await StudentProfile.findById(req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student profile not found" });
  }

  return res.json(student);
});

router.post("/", async (req, res) => {
  const student = await StudentProfile.create(req.body);
  res.status(201).json(student);
});

router.post("/:id/quiz-results", async (req, res) => {
  const quizResult = await QuizResult.create({
    ...req.body,
    student: req.params.id
  });

  await StudentProfile.findByIdAndUpdate(req.params.id, {
    recommendedField: quizResult.recommendedField
  });

  res.status(201).json(quizResult);
});

export default router;
