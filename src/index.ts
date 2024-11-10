import express, { Request, Response , NextFunction} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 3001;
app.use(cors());

// Access admin_name from environment variables
const ADMIN_NAME = process.env.admin_name;

// Callback used tasks
function sendJsonSuccess(req: Request, res: Response) {
    res.status(200).json({ success: true });   
}

const onlyPassAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
      next(); // Proceed if authenticated
  } else {
      res.status(401).json({ message: "Unauthorized" });
  }
};
//middleware used in task 4
const onlyPassAuthorized = (admin_name: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
      const authHeader = req.headers.authorization;

      if (authHeader === admin_name) {
          next(); // Proceed if authorized
      } else {
          res.status(403).json({
              message: `malek4 access hna ya ${authHeader || "unknown"} roo7 el3ab b3eed`
          });
      }
  };
};

// Unprotected route to get the admin name
app.get('/task5/get-admin-name', (req: Request, res: Response) => {
  res.status(200).json({ admin_name: ADMIN_NAME });
 //console.log(ADMIN_NAME);
});

// Protected route that uses authentication and authorization
app.get('/task5/admin-only', 
  onlyPassAuthenticated,
  onlyPassAuthorized(ADMIN_NAME as string), // Pass admin_name from environment variables
  sendJsonSuccess
);
//task4
app.get('/task4', 
  onlyPassAuthenticated, 
  onlyPassAuthorized("ya 3m efta7 ana 3omda"), 
  sendJsonSuccess
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});