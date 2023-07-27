const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const Videos = require("./models/videos");
const Products = require("./models/products");
const Comments = require("./models/comments");

mongoose.connect(process.env.DATABASE_URL); //connect db from the env file

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", async () => {
  console.log("Connected to database");

  //function to fill the databse with dummy data
  await populateDatabase();

  app.listen(3000, () => console.log("Server Started")); //start!
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

// Function to populate video collection
async function populateDatabaseVideos() {
  try {
    // check if video collection already have data
    const videosCount = await Videos.countDocuments();
    if (videosCount === 0) {
      // insert to video collection
      const sampleVideos = [
        {
          imgUrl: "https://example.com/image",
          vidUrl: "https://example.com/video1ss",
          title: "Clear Your Skin NOW!",
        },
        {
          imgUrl: "https://example.com/image",
          vidUrl: "https://example.com/video1ss",
          title: "Best Fidget Gadgets",
        },
        {
          imgUrl: "https://example.com/image",
          vidUrl: "https://example.com/video1ss",
          title: "FGifts for pets",
        },
      ];
      await Videos.insertMany(sampleVideos);
      console.log("video dummy data imported!");
    }
  } catch (error) {
    console.error("error inserting dummy data", error);
  }
}
// Function to populate database
async function populateDatabase() {
  try {
    // Check if Videos collection already has data
    const videosCount = await Videos.countDocuments();
    if (videosCount === 0) {
      await populateDatabaseVideos();
    }

    // Check if Products collection already has data
    const productsCount = await Products.countDocuments();
    if (productsCount === 0) {
      const videos = await Videos.find();

      // Insert dummy data into  Products collection
      const sampleProducts = [
        {
          productImg: "https://example.com/product1.jpg",
          name: "Product 1",
          price: 10.99,
          videos: videos[0]._id,
        },
        {
          productImg: "https://example.com/product2.jpg",
          name: "Product 2",
          price: 15.99,
          videos: videos[1]._id,
        },
        {
          productImg: "https://example.com/product3.jpg",
          name: "Product 3",
          price: 11.99,
          videos: videos[1]._id,
        },
      ];
      await Products.insertMany(sampleProducts);
      console.log("Sample product data inserted successfully!");
    }

    // Check if Comments collection already has data
    const commentsCount = await Comments.countDocuments();
    if (commentsCount === 0) {
      const videos = await Videos.find();

      // Insert dummy data into  Comments collection
      const sampleComments = [
        {
          username: "GIGIH1",
          message: "So GIGIH!",
          videos: videos[1]._id,
        },
        {
          username: "Waie",
          message: "Why does this exist?",
          videos: videos[1]._id,
        },
        {
          username: "niceguy",
          message: "good product and video",
          videos: videos[0]._id,
        },
      ];
      await Comments.insertMany(sampleComments);
      console.log("comments and products imported!");
    }
  } catch (error) {
    console.error("Error inserting dummy data", error);
  }
}
