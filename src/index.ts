import express, { Request, Response } from 'express';
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
  });

app.get('/task1/', (req, res) => {
    res.status(200).contentType('text/plain').send('hello world');
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });