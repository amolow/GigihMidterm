const mongoose = require("mongoose");

const videosSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  vidUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Videos", videosSchema);
