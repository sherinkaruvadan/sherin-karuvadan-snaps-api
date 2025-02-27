//import express
import express from "express";
import cors from "cors";
import "dotenv/config";

import photoRoutes from "./routes/photos.js";
import tagRoutes from "./routes/tags.js";

const app = express();
const port = process.env.PORT || 3000;

//middleware
//allow cross-origin requests
app.use(cors());
//serve static files
app.use(express.static("public"));
// parses JSON in the request body and adds it as `req.body`
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from server");
});

//routes from modules
app.use("/photos", photoRoutes);
app.use("/tags", tagRoutes);

//listen for requests
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
