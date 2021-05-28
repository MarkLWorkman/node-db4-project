exports.seed = function (knex) {
  return knex("ingredients").insert([
    { ingredient_id: 27, ingredient_name: "Eggs" },
    { ingredient_id: 48, ingredient_name: "Ham" },
  ]);
};
