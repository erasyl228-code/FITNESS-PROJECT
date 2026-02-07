const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const {
  registerValidator,
  loginValidator,
} = require("../validators/authValidator");

const router = express.Router();

router.post("/register", registerValidator, registerUser);
router.post("/login", loginValidator, loginUser);

module.exports = router;
