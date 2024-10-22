# Introduction
- Each of you will create their own branch in order to start working on the tasks.
- Good luck with the tasks and get back to us whenever you need any help or assistance.
- You can use the task-tester to test if your code does the required task.

# Task 1: Create your branch and Setup an Express server
- Clone the repository, and make your own branch to start working.
- Your source code should be inside the src folder
- Install typescript packages
- Install express package and its types (types for packages are important in typescript)
- Create an Express server using type script and install the dependencies needed for that.
- Resource (Only point 1 and 2): https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln
- Your code should be in src/index.ts
- Use port 3000 for the express server
- Make a GET endpoint that returns a 200 status code with "hello world" response with content-type as plain text on /task1.
- Install and use cors so the backend is reachable from other origins (from the test url)
- `npm install cors`
- `npm install -D @types/cors`
- Import cors `import cors from "cors`
- And finally use it `app.use(cors());`