import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/task1", async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send("hello world");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
