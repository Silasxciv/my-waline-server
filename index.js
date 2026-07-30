import http from 'node:http';
import Waline from '@waline/vercel';

// 1. 初始化 Waline 处理函数 (Handler)
const walineHandler = Waline({
  type: 'postgres',
  db: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT || 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE || 'postgres',
  },
  jwtSecret: process.env.JWT_SECRET || 'waline_secret_123456',
});

const PORT = process.env.PORT || 8360;

// 2. 创建原生的 HTTP 服务器把 Waline 挂载上去，确保进程常驻
const server = http.createServer((req, res) => {
  walineHandler(req, res);
});

// 3. 监听 Render 指定的 PORT 端口
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Waline server is running on port ${PORT}`);
});
