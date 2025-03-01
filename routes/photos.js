import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { readFile, writeFile, findPhotoById } from "../util.js";

const router = express.Router();

//GET /photos -> get list of photos
router.get("/", (_req, res) => {
  const photos = readFile("data/photos.json");
  const photosWithSelectedFields = photos.map((photo) => {
    return {
      id: photo.id,
      photo: photo.photo,
      photoDescription: photo.photoDescription,
      photgrapher: photo.photographer,
      tags: photo.tags,
    };
  });
  res.send(photosWithSelectedFields);
});

//GET /photos/:id -> get a single photo matching the id
router.get("/:id", (req, res) => {
  const photos = readFile("data/photos.json");
  const photoId = req.params.id;
  const selectedPhoto = findPhotoById(photos, photoId);
  if (!selectedPhoto) {
    return res.status(404).send("Photo not found");
  }
  res.send(selectedPhoto);
});

//GET /photos/:id/comments -> get comments for a photo nmaching the id
router.get("/:id/comments", (req, res) => {
  const photos = readFile("data/photos.json");
  const photoId = req.params.id;
  const selectedPhoto = findPhotoById(photos, photoId);

  if (!selectedPhoto) {
    return res.status(404).send("Photo not found");
  }
  res.send(selectedPhoto.comments);
});

//POST /photos/:id/comments -> add a comment to a photo matching the id
router.post("/:id/comments", (req, res) => {
  const photos = readFile("data/photos.json");
  const photoId = req.params.id;
  const newComment = req.body;

  //add timestamp and uuids to the new comment
  newComment.id = uuidv4();
  newComment.timestamp = Date.now();
  const selectedPhoto = findPhotoById(photos, photoId);
  selectedPhoto.comments.push(newComment);
  writeFile(photos, "data/photos.json");
  res.status(201).send(selectedPhoto.comments);
});

export default router;
