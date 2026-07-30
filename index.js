import { Waline } from '@waline/server';

Waline({
  // 显式指定使用 Postgres 引擎
  type: 'postgres',
  
  // 传入 Supabase 数据库连接配置
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
