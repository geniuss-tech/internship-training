import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// task one Begin
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/task1", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send("hello world");
});

//Task one end

// Task two Begin
const sendJsonSuccess = function (req: Request, res: Response) {
  res.status(200).json({ success: true });
};

app.get("/task2", sendJsonSuccess);
app.post("/task2", sendJsonSuccess);
app.patch("/task2", sendJsonSuccess);
app.delete("/task2", sendJsonSuccess);
app.put("/task2", sendJsonSuccess);

// task Two End

// task 3 begin
const onlyPassAuthenticated = (req: Request, res: Response, next: any) => {
  if (req.headers.authorization) {
    console.log(req.headers.authorization);
    next();
  } else {
    res.status(401).json({ message: "meeeeeeen?"});
  }
};
app.get("/task3", onlyPassAuthenticated, sendJsonSuccess);
// task 3 end
