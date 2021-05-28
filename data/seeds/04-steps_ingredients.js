exports.seed = function (knex) {
  return knex("steps_ingredients").insert([
    { step_id: 12, ingredient_id: 27, quantity: 0.014 },
    { step_id: 12, ingredient_id: 48, quantity: 0.1 },
  ]);
};
