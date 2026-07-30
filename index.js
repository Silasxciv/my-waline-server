import { Waline } from '@waline/server';

Waline({
  type: 'postgres',
  db: process.env.PG_DB_URL,
  jwtSecret: process.env.JWT_SECRET || 'waline_secret_key',
  port: process.env.PORT || 8360,
});
