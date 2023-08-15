const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const allowedOrigins = [
  "https://gigihfinalsbackend.onrender.com/",
  "https://gigihfinalsfrontend.onrender.com/",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed"));
    }
  },
};

app.use(cors(corsOptions));

const {
  populateDatabaseVideos,
  populateDatabase,
} = require("./util/databasePopulate.js");

mongoose.connect(process.env.DATABASE_URI);

const db = mongoose.connection;
app.use(cors());

db.on("error", (error) => console.error(error));
db.once("open", async () => {
  console.log("Connected to database");

  // // Function to fill the database with dummy data
  // await populateDatabase();

  app.listen(4000, () => console.log("Server Started"));
});

app.use(express.json());

//Endpoints
const videosRouter = require("./routes/videos.js");
const productsRouter = require("./routes/product.js");
const commentsRouter = require("./routes/comments.js");
app.use("/videos", videosRouter);
app.use("/products", productsRouter);
app.use("/comments", commentsRouter);

//end of server code
