const Recipe = require("../models/recipeModel");
const getRecipes = async (req, res) => {
  const recipes = await Recipe.find();
  return res.status(200).json(recipes);
};

const getRecipe = async (req, res) => {
  const recipes = await Recipe.findById(req.params.id);
  return res.status(200).json(recipes);
};

const addRecipe = async (req, res) => {
  const { title, ingredients, instructions, time } = req.body;

  if (!title || !ingredients || !instructions || !time) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields." });
  }
  const newRecipe = await Recipe.create({
    title,
    ingredients,
    instructions,
    time,
  });
  return res.status(201).json(newRecipe);
};

const updateRecipe = async (req, res) => {
  const { title, ingredients, instructions, time } = req.body;

  let recipe = await Recipe.findById(req.params.id);
  try {
    if (recipe) {
      await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.status(200).json({ title, ingredients, instructions, time });
    }
  } catch (err) {
    return res.status(404).json({ message: "Recipe not found" });
  }
};

const deleteRecipe = (req, res) => {
  res.json({ message: "Hello from express [recipeController]" });
};

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
