import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    completedSkills: [{ type: String }],
    completedRoadmapSteps: [{ type: String }],
    courseProgress: { type: Map, of: Number, default: {} },
    streak: { type: Number, default: 0 },
    totalLearningHours: { type: Number, default: 0 },
    weeklyGoal: { type: Number, default: 12 },
    weeklyHours: { type: Number, default: 0 },
    badges: [{ type: String }]
  },
  { timestamps: true }
);

export default mongoose.model("Progress", progressSchema);
