const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentController");

// Get all Comments
router.get("/", commentsController.getAllComments);

// Create a new comment and reference it to video
router.post("/", commentsController.postComment);

// Get all comments that references a specific video
router.get("/:videoId", commentsController.getCommentByVideoId);

module.exports = router;
