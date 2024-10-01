import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email").unique().notNullable();
      table.timestamps(true, true);
    })
    .createTable("ideas", (table) => {
      table.increments("id").primary();
      table.string("theme").notNullable();
      table.string("description");
      table.timestamps(true, true);
      table
        .integer("users_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("ideas");
}
