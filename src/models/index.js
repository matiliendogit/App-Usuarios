import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import Sequelize from "sequelize";
import process from "process";
import dotenv from "dotenv";
import configFile from "../../sequelizeDB/config/config.js";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";

const config = configFile[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Carga dinámica de modelos
const modelFiles = fs
  .readdirSync(__dirname)
  .filter((file) => file !== basename && file.endsWith(".js"));

for (const file of modelFiles) {
  const fullPath = path.join(__dirname, file);
  const fileUrl = pathToFileURL(fullPath).href;

  const { default: defineModel } = await import(fileUrl);
  const model = defineModel(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
}

// Relaciones entre modelos
for (const modelName of Object.keys(db)) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
