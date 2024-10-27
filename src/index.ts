import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

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