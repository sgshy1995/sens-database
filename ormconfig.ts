module.exports = {
    synchronize: false,
    logging: false,
    autoSchemaSync: false,
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    extra: {
        charset: "utf8mb4_unicode_ci"
    },
    entities: [
       "build/entity/*.js"
    ],
    migrations: [
       "build/migration/*.js"
    ],
    subscribers: [
       "build/subscriber/*.js"
    ],
    cli: {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
 }