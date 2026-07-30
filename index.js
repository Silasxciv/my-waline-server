import Waline from '@waline/vercel/vanilla.js';

Waline({
  // 显式指定使用 postgres 数据库
  type: 'postgres',
  
  // 直接读取你的 Supabase 连接串
  db: process.env.POSTGRES_URL || process.env.PG_DB_URL,
  
  // JWT 密钥
  jwtSecret: process.env.JWT_SECRET || 'waline_secret_key',
  
  // 监听端口
  port: process.env.PORT || 8360,
});
