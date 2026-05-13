import mongoose from "mongoose";

const salarySchema = new mongoose.Schema(
  {
    min: { type: Number, required: true },
    avg: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  { _id: false }
);

const roadmapPhaseSchema = new mongoose.Schema(
  {
    range: { type: String, required: true },
    level: { type: String, enum: ["Beginner", "Intermediate", "Advanced", "Professional"], required: true },
    progress: { type: Number, min: 0, max: 100, required: true },
    skills: [{ type: String, required: true }],
    tools: [{ type: String, required: true }],
    projects: [{ type: String, required: true }],
    outcome: { type: String, required: true }
  },
  { _id: false }
);

const fieldSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    skills: [{ type: String, required: true }],
    tools: [{ type: String, required: true }],
    roles: [{ type: String, required: true }],
    companies: [{ type: String, required: true }],
    salary: { type: salarySchema, required: true },
    demand: { type: Number, min: 0, max: 100, required: true },
    demandLevel: { type: String, enum: ["High", "Medium", "Low"], required: true },
    difficulty: { type: Number, min: 0, max: 100, required: true },
    learningTime: { type: String, required: true },
    global: { type: Number, min: 0, max: 100, required: true },
    roadmap: {
      title: { type: String, required: true },
      summary: { type: String, required: true },
      periods: [roadmapPhaseSchema]
    }
  },
  { timestamps: true }
);

export default mongoose.model("Field", fieldSchema);
