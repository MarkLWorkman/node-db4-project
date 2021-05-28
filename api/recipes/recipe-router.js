const router = require("express").Router();
const Recipes = require("./recipe-model");
const Middleware = require("./recipe-middleware");
const ExpressError = require("../ExpressError");

router.get("/:recipe_id", (req, res, next) => {
  console.log(req.recipe, "3");
  const { recipe_id } = req.params;

  Recipes.findById(recipe_id)
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((err) => {
      next(new ExpressError(err, 500));
    });
});

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
