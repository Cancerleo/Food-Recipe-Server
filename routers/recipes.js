const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
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

router.post("/addrecipe", authMiddleware, async (req, res) => {
  const { name, description, imageUrl } = req.body;
  const userId = req.user.id;

  if (!name) {
    return res.status(400).send({ message: "A recipe must have a name" });
  }

  const recipe = await Recipes.create({
    name,
    description,
    imageUrl,
    userId,
  });
  return res.status(201).send({ message: " Recipe created", recipe });
});

module.exports = router;
