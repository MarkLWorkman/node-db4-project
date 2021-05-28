exports.seed = function (knex) {
  return knex("steps").insert([
    {
      step_id: 11,
      step_number: 1,
      step_instructions: "Put a large saucepan on a medium heat",
      recipe_id: 1,
    },
    {
      step_id: 12,
      step_number: 2,
      step_instructions: "Mix eggs and ham",
      recipe_id: 1,
    },
  ]);
};
