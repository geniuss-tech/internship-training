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
// onlyPassAuthorized middleware for only get task4
const onlyPassAuthorized = (adminName: string) => {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (req.headers.authorization !== adminName) {
      console.log("Not Authorized");
      res.status(403).json({
        message: `malek4 access hna ya ${adminName} roo7 el3ab b3eed`,
      });
    }
    else{
      console.log("Authorized");
      next();
    }
  };
};
const sendJsonSuccess = (req: express.Request, res: express.Response) => {
  res
    .setHeader("Content-Type", "application/json")
    .status(200)
    .json({ success: true });
};

app.get(
  "/task4",
  onlyPassAuthenticated,
  onlyPassAuthorized("ya 3m efta7 ana 3omda"),
  sendJsonSuccess
);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
