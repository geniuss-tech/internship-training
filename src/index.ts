import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
// to be able to post
app.use(express.json());
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
// app.use(onlyPassAuthenticated);
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
app.get(
  "/task5/admin-only",
  onlyPassAuthenticated,
  onlyPassAuthorized(String(adminName)),
  sendJsonSuccess
);

//task 6
let studentNames: { name: string }[] = [];
app.get("/task6/students", (req, res) => {
  res.status(200).json(studentNames);
});

app.post("/task6/students", (req, res) => {
  const student = req.body;
  console.log(student);
  const exists = studentNames.find((i) => i.name === student.name);
  if (!exists) {
    studentNames.push(student);
    res.status(200).send("done! ... new student has been added!");
  } else
    res.status(400).json({ message: "eb3at al request 3edel m4 na2sa bugs" });
});

//task 7
app.get("/task7/:name", (req, res) => {
  if (studentNames.find((i) => i.name === req.params.name)) {
    res.status(200).json({ found: true });
  } else {
    res.status(404).json({ found: false });
  }
});
//server
const port = process.env.port;
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
