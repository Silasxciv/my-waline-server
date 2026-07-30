// 1. 先注入环境变量，阻止 config.js 报错
process.env.DB_TYPE = 'postgres';
process.env.SQL_TYPE = 'postgres';

if (process.env.PG_DB_URL) {
  process.env.POSTGRES_URL = process.env.PG_DB_URL;
  process.env.WALINE_DB_URL = process.env.PG_DB_URL;
}

// 2. 使用 require 导入（千万不要用 import 关键字）
const Waline = require('@waline/vercel');

// 3. 启动 Waline
Waline({
  port: process.env.PORT || 8360,
});
