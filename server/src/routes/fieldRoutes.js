import express from "express";
import Field from "../models/Field.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const fields = await Field.find().sort({ category: 1, title: 1 });
  res.json(fields);
});

router.get("/:slug", async (req, res) => {
  const field = await Field.findOne({ slug: req.params.slug });

  if (!field) {
    return res.status(404).json({ message: "Field not found" });
  }

  return res.json(field);
});

router.post("/", async (req, res) => {
  const field = await Field.create(req.body);
  res.status(201).json(field);
});

export default router;
