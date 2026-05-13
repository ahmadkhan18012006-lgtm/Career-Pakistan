import mongoose from "mongoose";

const skillProgressSchema = new mongoose.Schema(
  {
    skill: { type: String, required: true },
    progress: { type: Number, min: 0, max: 100, default: 0 }
  },
  { _id: false }
);

const completedSectionSchema = new mongoose.Schema(
  {
    fieldSlug: { type: String, required: true },
    roadmapRange: { type: String, required: true },
    completedAt: { type: Date, default: Date.now }
  },
  { _id: false }
);

const studentProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    university: { type: String },
    degreeProgram: { type: String, enum: ["BSCS", "BSIT", "BSDS", "Other"], default: "BSCS" },
    semester: { type: Number, min: 1, max: 8 },
    preferredFields: [{ type: String }],
    recommendedField: { type: String },
    skillProgress: [skillProgressSchema],
    completedSections: [completedSectionSchema],
    nextSteps: [{ type: String }]
  },
  { timestamps: true }
);

export default mongoose.model("StudentProfile", studentProfileSchema);
