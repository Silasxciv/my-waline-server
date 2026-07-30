import Waline from '@waline/vercel/vanilla.js';

// 显式将环境变量绑定到 process.env，确保底层 pg 驱动无缝读取
const dbUrl = process.env.POSTGRES_URL || process.env.PG_DB_URL;

Waline({
  type: 'postgres',
  db: dbUrl,
  pgDbUrl: dbUrl,
  jwtSecret: process.env.JWT_SECRET || 'waline_secret_key',
  port: process.env.PORT || 8360,
});
