// 在引入 Waline 之前，先强制兜底设置环境变量
if (process.env.PG_DB_URL && !process.env.POSTGRES_URL) {
  process.env.POSTGRES_URL = process.env.PG_DB_URL;
}

// 补齐 Waline 底层 config.js 强行检查的变量名
process.env.DB_TYPE = 'postgres';
process.env.SQL_TYPE = 'postgres';

// 动态导入，确保环境变量设置完毕后再初始化 config.js
const { default: Waline } = await import('@waline/vercel');

Waline({
  port: process.env.PORT || 8360,
});
