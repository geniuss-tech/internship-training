import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

//Config
dotenv.config();

const app = express();

//Middleware Usage
app.use(cors());
app.use(express.json());

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

const onlyPassAuthorized = (admin_name: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userName = req.headers.authorization;
    if (userName === admin_name) {
      next();
    } else {
      res.status(403).json({
        message: `malek4 access hna ya ${userName} roo7 el3ab b3eed`,
      });
    }
  };
};

const sendJsonSuccess = async (req: Request, res: Response) => {
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

// Task 4
app.get(
  "/task4",
  onlyPassAuthenticated,
  onlyPassAuthorized("ya 3m efta7 ana 3omda"),
  sendJsonSuccess
);

// Task 5
const admin_name: string = process.env.admin_name || "ya 3m efta7 ana 3omda";

app.get("/task5/get-admin-name", (req: Request, res: Response) => {
  res.status(200).json({ admin_name: admin_name });
});

app.get(
  "/task5/admin-only",
  onlyPassAuthenticated,
  onlyPassAuthorized(admin_name),
  sendJsonSuccess
);

// Task 6
const studentNames: string[] = [];

app.get("/task6/students", (req: Request, res: Response) => {
  res.status(200).json({ studentNames });
});

app.post("/task6/students", (req: Request, res: Response) => {
  const { name } = req.body;
  if (typeof name !== "string" || !name) {
    res.status(400).json({ message: "eb3at al request 3edel m4 na2sa bugs" });
    return;
  }
  studentNames.push(name);
  res.status(200).json({ message: "done" });
});

//start server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
