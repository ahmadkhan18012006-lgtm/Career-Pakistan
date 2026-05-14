import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    premium: { type: Boolean, default: false },
    profile: {
      image: { type: String, default: "" },
      bio: { type: String, default: "" },
      interests: [{ type: String }],
      selectedCareerPath: { type: String, default: "web-development" },
      goals: { type: String, default: "" }
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
