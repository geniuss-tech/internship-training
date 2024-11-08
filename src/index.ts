import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import { text } from 'stream/consumers';
import cors from "cors";

const adminName = process.env.admin_name || "";
const app = express();
const port = process.env.PORT || 3000;
const sendJsonSuccess = (req: Request, res: Response) => {
  res.status(200).json({ success: true });
};
const onlyPassAuthenticated = (req: Request, res: Response, next: Function) => {
  next();
};
function onlyPassAuthorized(admin_name: string) {
  return (req: Request, res: Response, next: Function) => {
      const Header = req.headers.authorization;

      if (Header === admin_name) {
          next(); 
      } else {
          res.status(403).json({message: `malek4 access hna ya ${Header} roo7 el3ab b3eed`,});
      }
  };
}

app.use(cors());
app.get('/task1', (req: Request, res: Response) => {
    res.status(200).setHeader('Content-Type', 'application/json').send('hello world');
  });
app.all('/task2',sendJsonSuccess)

app.get('/task3', onlyPassAuthenticated, sendJsonSuccess);

app.get('/task4',onlyPassAuthenticated,onlyPassAuthorized("ya 3m efta7 ana 3omda"),sendJsonSuccess);

app.get('/task5/get-admin-name',(req:Request,res:Response)=>{
  res.status(200).json({ admin_name: adminName });})

app.get('/task5/admin-only',onlyPassAuthenticated,onlyPassAuthorized(adminName),sendJsonSuccess);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  
 