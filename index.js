import Waline from '@waline/vercel';

// 启动 Waline 并保持进程监听
const app = Waline({
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

// 如果 Waline 返回的是服务器实例或 Promise，防止 Node 进程静默退出
if (app && typeof app.then === 'function') {
  app.then(() => console.log('Waline engine initialized successfully.'));
}
