import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;
app.use(cors());

// GET /task1 endpoint
app.get('/task1', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/plain'); // Ensure correct content-type
  res.status(200).send('hello world');         // Ensure exact response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});