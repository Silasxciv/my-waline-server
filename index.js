import Waline from '@waline/vercel';

// 1. 强制设定数据库类型为 postgres
process.env.DB_TYPE = 'postgres';

// 2. 补全 Supabase/PostgreSQL 连接变量
if (process.env.PG_DB_URL) {
  process.env.POSTGRES_URL = process.env.PG_DB_URL;
  process.env.WALINE_DB_URL = process.env.PG_DB_URL;
}

// 3. 启动 Waline
Waline({
  env: process.env,
  type: 'postgres',
  dbUrl: process.env.PG_DB_URL,
  port: process.env.PORT || 8360,
});
