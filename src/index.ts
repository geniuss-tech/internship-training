import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

//Middleware
const onlyPassAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(401).json({ message: "meeeeeeen?" });
  }
};

const sendJsonSuccess = async (req: Request, res: Response, data: any) => {
  res.status(200).json({ success: true });
};

// Task 1
app.get("/task1", async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send("hello world");
});

// Task 2
app.get("/task2", sendJsonSuccess);
app.post("/task2", sendJsonSuccess);
app.patch("/task2", sendJsonSuccess);
app.put("/task2", sendJsonSuccess);
app.delete("/task2", sendJsonSuccess);

// Task 3
app.get("/task3", onlyPassAuthenticated, sendJsonSuccess);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
