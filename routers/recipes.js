const { Router } = require("express");
const Recipes = require("../models").recipe;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const allRecipes = await Recipes.findAll();

    if (allRecipes === null) {
      return res
        .status(404)
        .send({ message: "There are no recipes in the database" });
    }

    res.status(200).json(allRecipes);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
