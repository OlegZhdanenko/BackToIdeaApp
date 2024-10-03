/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ideas", (table) => {
    table.increments("id").primary();
    table.string("theme").notNullable();
    table.string("description");
    table.timestamps(true, true);
    table
      .integer("users_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ideas");
};
