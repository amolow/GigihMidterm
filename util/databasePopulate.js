const Videos = require("../models/videos");
const Products = require("../models/products");
const Comments = require("../models/comments");

// Function to populate video collection
async function populateDatabaseVideos() {
  try {
    // check if video collection already have data
    const videosCount = await Videos.countDocuments();
    if (videosCount === 0) {
      // insert to video collection
      const sampleVideos = [
        {
          imgUrl:
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-and-yellow-generic-sale-flyer-design-template-c552f23fa8e1b3e8a7764883545ef215_screen.jpg?ts=1636987665",
          vidUrl: "https://www.youtube.com/watch?v=fC5MKJDW6sc",
          title: "Clear Your Skin NOW!",
        },
        {
          imgUrl:
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-and-yellow-generic-sale-flyer-design-template-c552f23fa8e1b3e8a7764883545ef215_screen.jpg?ts=1636987665",
          vidUrl: "https://www.youtube.com/watch?v=fC5MKJDW6sc",
          title: "Best Fidget Gadgets",
        },
        {
          imgUrl:
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-and-yellow-generic-sale-flyer-design-template-c552f23fa8e1b3e8a7764883545ef215_screen.jpg?ts=1636987665",
          vidUrl: "https://www.youtube.com/watch?v=fC5MKJDW6sc",
          title: "FGifts for pets",
        },
        {
          imgUrl:
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-and-yellow-generic-sale-flyer-design-template-c552f23fa8e1b3e8a7764883545ef215_screen.jpg?ts=1636987665",
          vidUrl: "https://www.youtube.com/watch?v=fC5MKJDW6sc",
          title: "Clear Your Skin NOW!",
        },
        {
          imgUrl:
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-and-yellow-generic-sale-flyer-design-template-c552f23fa8e1b3e8a7764883545ef215_screen.jpg?ts=1636987665",
          vidUrl: "https://www.youtube.com/watch?v=fC5MKJDW6sc",
          title: "Best Fidget Gadgets",
        },
        {
          imgUrl:
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-and-yellow-generic-sale-flyer-design-template-c552f23fa8e1b3e8a7764883545ef215_screen.jpg?ts=1636987665",
          vidUrl: "https://www.youtube.com/watch?v=fC5MKJDW6sc",
          title: "FGifts for pets",
        },
        {
          imgUrl:
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-and-yellow-generic-sale-flyer-design-template-c552f23fa8e1b3e8a7764883545ef215_screen.jpg?ts=1636987665",
          vidUrl: "https://www.youtube.com/watch?v=fC5MKJDW6sc",
          title: "Clear Your Skin NOW!",
        },
        {
          imgUrl:
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-and-yellow-generic-sale-flyer-design-template-c552f23fa8e1b3e8a7764883545ef215_screen.jpg?ts=1636987665",
          vidUrl: "https://www.youtube.com/watch?v=fC5MKJDW6sc",
          title: "Best Fidget Gadgets",
        },
        {
          imgUrl:
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-and-yellow-generic-sale-flyer-design-template-c552f23fa8e1b3e8a7764883545ef215_screen.jpg?ts=1636987665",
          vidUrl: "https://www.youtube.com/watch?v=fC5MKJDW6sc",
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

// Function to populate the whole database
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
          productImg:
            "https://static.wikia.nocookie.net/onepiece/images/6/66/Gear_5_Infobox.png/revision/latest?cb=20230425133604&path-prefix=id",
          name: "Product 1",
          price: 10.99,
          videos: videos[0]._id,
        },
        {
          productImg:
            "https://static.wikia.nocookie.net/onepiece/images/6/66/Gear_5_Infobox.png/revision/latest?cb=20230425133604&path-prefix=id",
          name: "Product 2",
          price: 15.99,
          videos: videos[1]._id,
        },
        {
          productImg:
            "https://static.wikia.nocookie.net/onepiece/images/6/66/Gear_5_Infobox.png/revision/latest?cb=20230425133604&path-prefix=id",
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
          comment: "So GIGIH!",
          videos: videos[1]._id,
        },
        {
          username: "Waie",
          comment: "Why does this exist?",
          videos: videos[1]._id,
        },
        {
          username: "niceguy",
          comment: "good product and video",
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

module.exports = { populateDatabaseVideos, populateDatabase };
