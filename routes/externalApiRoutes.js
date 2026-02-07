const express = require("express");
const { getExercisesByMuscle } = require("../controllers/externalApiController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/exercises/:muscle", protect, getExercisesByMuscle);

module.exports = router;
