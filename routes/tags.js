import express from "express";
import fs from "fs";

const router = express.Router();

//GET /tags -> get list of tags
router.get("/", (_req, res) => {
  const tagsFile = fs.readFileSync("./data/tags.json");
  const tags = JSON.parse(tagsFile);
  res.send(tags);
});

export default router;
