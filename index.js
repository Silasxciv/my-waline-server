import Waline from '@waline/vercel';

Waline({
  type: 'postgres',
  db: process.env.PG_DB_URL,
  port: process.env.PORT || 8360,
});
