import Waline from '@waline/vercel';

// 强制设置环境变量，确保 Waline 底层能感知 DB 配置
process.env.DB_TYPE = 'postgres';

Waline({
  type: 'postgres',
  pgDbUrl: process.env.PG_DB_URL,
  jwtSecret: process.env.JWT_SECRET || 'waline_secret_key',
  port: process.env.PORT || 8360,
});
