import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(cors());
import index from './router/index';
index(app);

// 404 Error Handler
app.all('*', (_req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    error: 'And Just Like That, You Completely Lost Your Way 😥',
  });
});

export default app;
