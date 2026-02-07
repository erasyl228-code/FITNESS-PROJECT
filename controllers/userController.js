const User = require("../models/User");

// GET /api/users/profile
const getProfile = async (req, res) => {
  res.json(req.user);
};

// PUT /api/users/profile
const updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    await user.save();
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

module.exports = { getProfile, updateProfile };
