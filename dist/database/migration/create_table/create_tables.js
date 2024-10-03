"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
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
async function down(knex) {
    return knex.schema.dropTableIfExists("users").dropTableIfExists("ideas");
}
//# sourceMappingURL=create_tables.js.map