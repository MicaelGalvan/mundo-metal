import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import CONFIG from '../../config/config.js';


const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);

const db = {};

let sequelize;
const { database, username, password, host, dialect, ...options } = CONFIG;

sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  ...options
});

// Function to load models from a directory
const loadModels = async (dir) => {
  const files = await fs.promises.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.promises.stat(filePath);

    if (stat.isDirectory()) {
      await loadModels(filePath); // Recursively load models from subdirectories
    } else if (file !== basename && file.slice(-3) === '.js') {
      const model = await import(filePath);
      db[model.default.name] = model.default;
    }
  }
};

// Load models from each entity's model directory
const modelDirs = [
  path.join(__dirname, '../users/models'), // Corrected path to model directory
  // Add other model directories here
];

for (const modelDir of modelDirs) {
  await loadModels(modelDir);
}
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;