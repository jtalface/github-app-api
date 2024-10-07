import express, { Request, Response } from 'express';

const app = express();

// Wildcard route to catch all other routes
app.get('*', async (req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;