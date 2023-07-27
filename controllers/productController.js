const Videos = require("../models/videos");
const Products = require("../models/products");
const mongoose = require("mongoose");

// Get all Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all product that references a specific video
exports.getProductsByVideoId = async (req, res) => {
  const videoId = req.params.videoId;

  // check if video id is real
  if (!mongoose.Types.ObjectId.isValid(videoId)) {
    return res.status(400).json({ message: "Invalid videoId" });
  }

  try {
    // Find the video
    const video = await Videos.findById(videoId);

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    // Find all products that have the matching videoId
    const products = await Products.find({ videos: videoId });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
