import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    mappedField: { type: String, required: true }
  },
  { _id: false }
);

const quizResultSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "StudentProfile" },
    answers: [answerSchema],
    scores: { type: Map, of: Number, default: {} },
    recommendedField: { type: String, required: true },
    explanation: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("QuizResult", quizResultSchema);
