const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
  videos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Videos",
    required: true,
  },
});

module.exports = mongoose.model("Comments", commentSchema);
