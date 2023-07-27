const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

// Get all Videos
router.get("/", videoController.getAllVideos);

// Get one video
router.get("/:id", videoController.getVideoById);

// create one video
router.post("/", videoController.createVideo);

module.exports = router;
