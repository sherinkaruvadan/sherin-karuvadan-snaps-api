import fs from "fs";
//util function to read from file

export const readFile = (filepath) => {
  const photosFile = fs.readFileSync(filepath);
  return JSON.parse(photosFile);
};

//util function to write to file
export const writeFile = (photos, filepath) => {
  fs.writeFileSync(filepath, JSON.stringify(photos));
};

//function to find photo by id
export const findPhotoById = (photos, photoId) => {
  return photos.find((photo) => photo.id === photoId);
};
