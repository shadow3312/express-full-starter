import dotenv from "dotenv"
import { cleanEnv, str, port } from 'envalid';

dotenv.config()

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'production', 'test'] }),
  PORT: port({ default: 3001 }),
  DATABASE_URL: str(),
});