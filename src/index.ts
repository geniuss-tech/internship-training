import express, { Request, Response , NextFunction} from 'express';
import cors from 'cors';
const app = express();
const PORT = 3001;
app.use(cors());

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