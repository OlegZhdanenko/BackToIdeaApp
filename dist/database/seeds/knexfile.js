"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    development: {
        client: "mysql2",
        connection: {
            host: "3306⁠",
            user: "root",
            password: "admin",
            database: "mysql",
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "./migrations",
        },
        seeds: {
            directory: "./seeds",
        },
    },
};
exports.default = config;
//# sourceMappingURL=knexfile.js.map