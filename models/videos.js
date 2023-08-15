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
  store: {
    type: String,
    required: true,
  },
  storeAvatar: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Videos", videosSchema);
