const config = {
  development: {
    client: "mysql2",
    connection: "mysql://root:admin@localhost:3306/app?charset=utf8mb4",
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations",
      extension: "cjs",
      loadExtensions: [".cjs", ".js"],
    },
    seeds: {
      directory: "./seeds",
    },
  },
};

export default config;
