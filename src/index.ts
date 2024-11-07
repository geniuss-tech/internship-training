import express from "express";
import cors from "cors";
import 'dotenv/config';
const app = express();
app.use(cors());
// task 1
app.get("/task1", (req, res) => {
  res.setHeader("content-type", "text/plain").status(200).send("hello world");
  console.log(res.getHeader("content-type"));
});

// task 2
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

//task 3
//middleware
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
app.get("/task3", sendJsonSuccess);

//task 4
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
    } else {
      console.log("Authorized");
      next();
    }
  };
};
app.get(
  "/task4",
  onlyPassAuthenticated,
  onlyPassAuthorized("ya 3m efta7 ana 3omda"),
  sendJsonSuccess
);

//taske 5
const adminName = process.env.admin_name;
app.get("/task5/get-admin-name", (req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ admin_name: adminName });
});
app.get("/task5/admin-only",onlyPassAuthenticated ,onlyPassAuthorized(String(adminName)),sendJsonSuccess)
//server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
