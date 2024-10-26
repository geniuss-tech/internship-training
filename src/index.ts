import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
// middleware
const onlyPassAuthenticated = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!req.headers.authorization) {
    res.status(401).json({ message: "meeeeeeen?" });
  }
  console.log("used!");
  next();
};
app.use(onlyPassAuthenticated);
const sendJsonSuccess = (req: express.Request, res: express.Response) => {
  res
    .setHeader("Content-Type", "application/json")
    .status(200)
    .json({ success: true });
};

app.get("/task3", sendJsonSuccess);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
