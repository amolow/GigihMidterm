const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  productImg: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  videos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Videos",
    required: true,
  },
});

module.exports = mongoose.model("Products", productsSchema);
