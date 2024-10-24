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

# Task 2
- Make a quick search about nodemon
- Add a new script in package.json named dev that starts nodemon on src/index.ts file
- Use `npm run dev` from now on to work on you project.
- Create 5 endpoints: GET, POST, PATCH, PUT, DELETE on the same path /task2
- They should use the same callback function, name of the function should be sendJsonSuccess that does the following.
- Return a 200 status code with {success: true} with content-type as json.

# Task 3
- A get endpoint /task3 that uses the same sendJsonSuccess as callback, you should create a middleware named onlyPassAuthenticated and use it for this endpoint.
- The middleware should check for the authorization header in the request, call the next function if it has any value
- If authorization doesn't exist in the headers, the middleware should reply with status 401 and body {message: "meeeeeeen?"}
- From now on, all tasks should reply with JSON content type, keep in mind first task still needs to be returning plain text to pass the tests.
