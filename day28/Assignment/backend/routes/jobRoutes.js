const express = require("express");
const { getJobs, applyToJob } = require("../controllers/jobController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getJobs);
router.post("/apply", protect, applyToJob);

module.exports = router;
