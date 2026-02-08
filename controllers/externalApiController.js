const axios = require("axios");

// GET /api/external/exercises/:muscle
const getExercisesByMuscle = async (req, res) => {
  try {
    const muscle = req.params.muscle;

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
