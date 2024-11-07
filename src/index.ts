import express, { Request, Response } from 'express';
import cors from "cors";
import { NextFunction } from 'express-serve-static-core';

const app = express();
const port = process.env.PORT || 3000;

const onlyPassAuthenticated = (req : Request, res : Response, next: NextFunction) =>{ // the middleware
  if (req.headers.authorization) next();
  else res.status(401).json({ message: "meeeeeeen?" });
}

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
  });

app.get('/task1/', (req, res) => {
    res.status(200).contentType('text/plain').send('hello world');
  });


function sendJsonSuccess(req: Request, res: Response, next: NextFunction){ 
  res.status(200).json({ success: true });
}
  
app.get('/task2/', sendJsonSuccess);
app.post('/task2/', sendJsonSuccess);
app.patch('/task2/', sendJsonSuccess);
app.put('/task2/', sendJsonSuccess);
app.delete('/task2/', sendJsonSuccess);


app.get('/task3/', onlyPassAuthenticated, sendJsonSuccess);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });