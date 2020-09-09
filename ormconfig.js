// module.exports = [
//   {
//     name: "production",
//     type: "mysql",
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DBNAME,
//     synchronize: false,
//     logging: true,
//     entities: ["src/entity/*.ts"],
//     subscribers: ["src/migration/*.ts"],
//     migrations: ["src/migration/*.ts"],
//     migrationsTableName: "migrations",
//     cli: {
//       entitiesDir: "src/entity",
//       migrationsDir: "src/migration",
//       subscribersDir: "src/subscriber",
//     },
//   },
//   {
//     name: "test",
//     type: "mysql",
//     host: process.env.TEST_DB_HOST,
//     port: process.env.TEST_DB_PORT,
//     username: process.env.TEST_DB_USERNAME,
//     password: process.env.TEST_DB_PASSWORD,
//     database: process.env.TEST_DB_DBNAME,
//     synchronize: true,
//     dropSchema: true,
//     logging: false,
//     entities: ["src/entity/*.ts"],
//     subscribers: ["src/migration/*.ts"],
//     migrations: ["src/migration/*.ts"],
//   },
// ];
module.exports = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  synchronize: true,
  logging: false,
  entities: ["src/entity/*.ts"],
  subscribers: ["src/migration/*.ts"],
  migrations: ["src/migration/*.ts"],
  migrationsTableName: "migrations",
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};
