import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import fieldRoutes from "./routes/fieldRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/careerpath_pakistan";

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "CareerPath Pakistan API" });
});

app.use("/api/fields", fieldRoutes);
app.use("/api/students", studentRoutes);

async function startServer() {
  try {
    await mongoose.connect(mongoUri);
    app.listen(port, () => {
      console.log(`CareerPath Pakistan API running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start API server:", error.message);
    process.exit(1);
  }
}

startServer();
