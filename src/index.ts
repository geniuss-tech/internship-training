import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const port = 3000;

const sendJsonSuccess = (req: express.Request, res: express.Response) => {
  res
    .setHeader("Content-Type", "application/json")
    .status(200)
    .json({ success: true });
};

app.get("/task2", sendJsonSuccess);
app.post("/task2", sendJsonSuccess);
app.patch("/task2", sendJsonSuccess);
app.put("/task2", sendJsonSuccess);
app.delete("/task2", sendJsonSuccess);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
