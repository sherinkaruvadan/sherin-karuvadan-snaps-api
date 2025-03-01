import express from "express";
import fs from "fs";
import { readFile } from "../util.js";

const router = express.Router();

//GET /tags -> get list of tags
router.get("/", (_req, res) => {
  const tags = readFile("data/tags.json");
  res.send(tags);
});

export default router;
