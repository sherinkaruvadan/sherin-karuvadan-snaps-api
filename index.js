//import express
import express from "express";
import photoRoutes from "./routes/photos.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from server");
});

//routes from modules
app.use("/photos", photoRoutes);

//listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
