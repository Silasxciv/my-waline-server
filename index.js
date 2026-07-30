import Waline from '@waline/vercel';

Waline({
  type: 'postgres',
  db: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT || 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE || 'postgres',
  },
  jwtSecret: process.env.JWT_SECRET || 'waline_secret_123456',
  port: process.env.PORT || 8360,
});
