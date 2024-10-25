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

  // Create 5 endpoints: GET, POST, PATCH, PUT, DELETE on the same path /task2
  function sendJsonSuccess(req: Request, res: Response) {
    res.status(200).json({ success: true });
  }
  
app.get('/task2/', sendJsonSuccess);
app.post('/task2/', sendJsonSuccess);
app.patch('/task2/', sendJsonSuccess);
app.put('/task2/', sendJsonSuccess);
app.delete('/task2/', sendJsonSuccess);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });