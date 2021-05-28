const Recipes = require("./recipe-model");
const ExpressError = require("../ExpressError");

const checkId = async (req, res, next) => {
  try {
    console.log(req.params, "2");
    const { recipe_id } = req.params;

    if (recipe_id) {
      const recipe = await Recipes.findById(recipe_id);
      req.recipe = recipe;
      next();
    } else {
      next(new ExpressError("Invalid Id", 404));
    }
  } catch (err) {
    next(new ExpressError(err, 500));
  }
};

module.exports = {
  checkId,
};
