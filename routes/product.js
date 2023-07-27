const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Get all Products
router.get("/", productController.getAllProducts);

// Get all products that references a specific video
router.get("/:videoId", productController.getProductsByVideoId);

module.exports = router;
