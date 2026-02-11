const axios = require("axios");
const allowedMuscles = [
  "chest",
  "biceps",
  "triceps",
  "back",
  "shoulders",
  "quadriceps",
  "hamstrings",
  "calves",
  "glutes",
  "abs"
];

const getExercisesByMuscle = async (req, res) => {
  try {
    const muscle = req.params.muscle.toLowerCase();
    if (!allowedMuscles.includes(muscle)) {
      return res.status(400).json({
        message: "Invalid muscle group",
        allowedMuscles: allowedMuscles
      });
    }

    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
      {
        headers: {
          "X-Api-Key": process.env.API_NINJAS_KEY 
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500);
    throw new Error("External API error");
  }
};

module.exports = { getExercisesByMuscle };
