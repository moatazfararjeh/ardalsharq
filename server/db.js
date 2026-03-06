import dotenv from 'dotenv';
import pkg from 'pg';

// Load environment variables from .env.local for development, .env for production
dotenv.config({ path: process.env.NODE_ENV === 'production' ? './.env' : './.env.local' });

const { Pool } = pkg;

console.log('DB_PASSWORD value:', process.env.DB_PASSWORD, 'Type:', typeof process.env.DB_PASSWORD);
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
});

export default pool;