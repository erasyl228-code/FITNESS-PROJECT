const Workout = require("../models/Workout");

// POST /api/workouts
const createWorkout = async (req, res) => {
  const workout = await Workout.create({
    title: req.body.title,
    exercises: req.body.exercises,
    duration: req.body.duration,
    calories: req.body.calories,
    user: req.user._id,
  });

  res.status(201).json(workout);
};

// GET /api/workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({ user: req.user._id });
  res.json(workouts);
};

// GET /api/workouts/:id
const getWorkoutById = async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (!workout) {
    res.status(404);
    throw new Error("Workout not found");
  }

  res.json(workout);
};

// PUT /api/workouts/:id
const updateWorkout = async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (!workout) {
    res.status(404);
    throw new Error("Workout not found");
  }

  workout.title = req.body.title || workout.title;
  workout.exercises = req.body.exercises || workout.exercises;
  workout.duration = req.body.duration || workout.duration;
  workout.calories = req.body.calories || workout.calories;

  await workout.save();
  res.json(workout);
};

// DELETE /api/workouts/:id
const deleteWorkout = async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (!workout) {
    res.status(404);
    throw new Error("Workout not found");
  }

  await workout.deleteOne();
  res.json({ message: "Workout removed" });
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
};
