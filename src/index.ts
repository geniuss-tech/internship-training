import express, { Request, Response } from 'express';
import cors from "cors";
import { NextFunction } from 'express-serve-static-core';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;



app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
  });

app.get('/task1/', (req, res) => {
    res.status(200).contentType('text/plain').send('hello world');
  });


function sendJsonSuccess(req: Request, res: Response){ 
  res.status(200).json({ success: true });
}



// task 2
app.get('/task2/', sendJsonSuccess);
app.post('/task2/', sendJsonSuccess);
app.patch('/task2/', sendJsonSuccess);
app.put('/task2/', sendJsonSuccess);
app.delete('/task2/', sendJsonSuccess);

// task 3

const onlyPassAuthenticated = (req : Request, res : Response, next: NextFunction) =>{ // the middleware
  if (req.headers.authorization) next(); // if exist pass to the next middleware
  else res.status(401).json({ message: "meeeeeeen?" }); // else, reply with status 401 and body {message: "meeeeeeen?"}
}

app.get('/task3/', onlyPassAuthenticated, sendJsonSuccess);


// task 4
const onlyPassAuthorized = (admin_name: string) => {

  return (req: Request, res: Response, next: NextFunction) => {
    
  const authHeader = req.headers.authorization

    if (authHeader === admin_name) next();
    else res.status(403).json({message : `malek4 access hna ya ${authHeader} roo7 el3ab b3ee`}); 
  
  }
}

app.get(
  '/task4/',
   onlyPassAuthenticated, 
   onlyPassAuthorized("ya 3m efta7 ana 3omda"), 
   sendJsonSuccess
  );

  // task 5

  app.get('/task5/get-admin-name', (req: Request, res: Response) => {
    const adminName = process.env.admin_name;
    res.status(200).json({ admin_name: adminName });
  });
  // task 5
  app.get(
    '/task5/admin-only',
    onlyPassAuthenticated,
    onlyPassAuthorized(process.env.admin_name || " "),
    sendJsonSuccess
    );

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });