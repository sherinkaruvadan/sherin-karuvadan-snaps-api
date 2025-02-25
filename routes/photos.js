import express from "express";
import fs from "fs";

const router = express.Router();

//GET /photos -> respond with a lis of photos

router.get("/", (_req, res) => {
  const photosFile = fs.readFileSync("./data/photos.json");
  const photos = JSON.parse(photosFile);
  res.send(photos);
});

//GET /photos/:id -> respond with single photo

router.get("/:id", (req, res) => {
  const photosFile = fs.readFileSync("./data/photos.json");
  const photos = JSON.parse(photosFile);
  const photoId = req.params.id;
  const selectedPhoto = photos.find((photo) => photo.id === photoId);
  res.send(selectedPhoto);
});

//GET /photos/:id/comments ->respond with comments for a photo

router.get("/:id/comments", (req, res) => {
  const photoFile = fs.readFileSync("./data/photos.json");
  const photos = JSON.parse(photoFile);
  const photoId = req.params.id;
  const selectedPhoto = photos.find((photo) => photo.id === photoId);
  res.send(selectedPhoto.comments);
});

export default router;
