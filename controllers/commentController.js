const Videos = require("../models/videos");
const Comments = require("../models/comments");
const mongoose = require("mongoose");

// Get all Comments
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comments.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new comment and use a video reference
exports.postComment = async (req, res) => {
  const { username, comment, videoId } = req.body;

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

    // Create new comment
    const newComment = new Comments({
      username,
      comment,
      videos: videoId,
    });
    await newComment.save(); //Save to mongo

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all comment that references a specific video
exports.getCommentByVideoId = async (req, res) => {
  const videoId = req.params.videoId;

  // check if video id is real
  if (!mongoose.Types.ObjectId.isValid(videoId)) {
    return res.status(400).json({ message: "Invalid videoId" });
  }

  try {
    // find the specific video
    const video = await Videos.findById(videoId);

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    // Find all comments that references the videoID
    const comments = await Comments.find({ videos: videoId });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
