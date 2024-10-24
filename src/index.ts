import express, { Request, Response } from 'express';
import { text } from 'stream/consumers';
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.get('/task1', (req: Request, res: Response) => {
    res.status(200).setHeader('Content-Type', 'text/plain').send('hello world');
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });