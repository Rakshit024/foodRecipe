const express = require("express");
const {
  getRecipes,
  getRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");
const router = express.Router();

router.get("/", getRecipes); //Get all recipes
router.get("/:id", getRecipe); //Get recipe by ID
router.post("/", addRecipe); //Add a new recipe
router.put("/:id", updateRecipe); //Update a recipe by ID
router.delete("/:id", deleteRecipe); //Delete a recipe by ID

module.exports = router;
