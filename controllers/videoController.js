const Videos = require("../models/videos");
const mongoose = require("mongoose");

// Get all Videos
exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Videos.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one video
exports.getVideoById = async (req, res) => {
  const videoId = req.params.id;

  // check if video id is real
  if (!mongoose.Types.ObjectId.isValid(videoId)) {
    return res.status(400).json({ message: "Invalid videoId" });
  }

  try {
    const video = await Videos.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createVideo = async (req, res) => {
  try {
    const { imgUrl, vidUrl, title } = req.body;

    // Create a new video object
    const newVideo = new Videos({
      imgUrl,
      vidUrl,
      title,
    });

    // Save the new video to db
    const createdVideo = await newVideo.save();

    res.status(201).json(createdVideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
