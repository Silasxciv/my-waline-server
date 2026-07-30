// 1. 优先在最顶部注入环境变量，防止 config.js 报错
process.env.DB_TYPE = 'postgres';
process.env.SQL_TYPE = 'postgres';

// 兼容各种 PostgreSQL 变量命名规范
if (process.env.PG_DB_URL) {
  process.env.POSTGRES_URL = process.env.PG_DB_URL;
  process.env.WALINE_DB_URL = process.env.PG_DB_URL;
}

// 2. 确保环境变量注入完成后，再 require 引入 Waline
const Waline = require('@waline/vercel');

// 3. 启动 Waline
Waline({
  port: process.env.PORT || 8360,
});
