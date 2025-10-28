import { Sequelize } from 'sequelize';
import path from 'path';
import fs from 'fs';

const dbPath = path.resolve(process.cwd(), 'database.sqlite');

// Ensure the database directory exists
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true, mode: 0o775 });
}

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: console.log,
  define: {
    freezeTableName: true,
  }
});

// Configure SQLite pragmas for better concurrency and foreign key support
const configureSQLite = async () => {
  try {
    await sequelize.query('PRAGMA journal_mode = WAL;');
    await sequelize.query('PRAGMA foreign_keys = ON;');
    await sequelize.query('PRAGMA synchronous = NORMAL;');
    console.log('SQLite pragmas configured successfully');
  } catch (error) {
    console.error('Error configuring SQLite pragmas:', error);
  }
};

configureSQLite();

export default sequelize;