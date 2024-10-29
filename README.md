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

# Task 4

- A get endpoint /task4 that uses the sendJsonSuccess callback, you should create and use a parameter middleware along with the onlyPassAuthenticated middleware.
- You should use both middlewares, onlyPassAuthenticated as the first one. (order matters)
- The middleware function name should be onlyPassAuthorized and it takes one paramter called admin_name, of type string.
- The middleware should check if the authorization header has the same value as name parameter of the middleware.
- In case the authorization header matches, it will call next to pass the middleware
- Otherwise it should reply with status 403 and body {message: "malek4 access hna ya (the name sent) roo7 el3ab b3eed"}
- (the name sent) should replaced with the authorization value used in the request - for example if I sent "3omda" and 3omda is not the admin name, the message should be: "malek4 access hna ya 3omda roo7 el3ab b3eed"
- In this task, pass "ya 3m efta7 ana 3omda" (please copy it carefully) as the value for the middleware parameter.
- Resource: https://tsmx.net/express-middleware-function-with-custom-parameters/

# Task 5

- In this task we will make 2 endpoints, and we want to use dotenv to load admin_name from a file. - Create a .env file in the project root that has the following content "admin_name={any value here}"
- A get endpoint on /task5/get-admin-name that returns the admin_name (loaded from the .env file) (Unprotected route)
- Response body: {admin_name: value} (JSON content type), status 200.
- A get endpoint on /task5/admin-only that uses the sendJsonSuccess callback
- the admin-only endpoint will use onlyPassAuthenticated and onlyPassAuthorized middlewares, pass the loaded admin_name to onlyPassAuthorized middleware.

# Task 6

- In this task you will create two endpoints and an array.
- Create an empty array called name studentNames
- Create a GET endpoint /task6/students that returns the studentNames array
- Create a POST endpoint with the same path that takes a JSON object like {name: string} and appends (adds) it to the array.
- The POST endpoint should make sure that the name exists and its type is string.
- If the validation for the POST body fails, return status 400 with body {message: "eb3at al request 3edel m4 na2sa bugs"}

# Task 7

- In this task you will create an endpoint with a route parameter. - Using the same array studentNames from task 6, create a GET endpoint /task7/:name
- Name is a route parameter
- This endpoint should answer based on if the given name is found in the studentNames array
- Respond with status 200 and the following body in case of finding the name: {found: true}
- Otherwise, status 404 and {found: false}
- Resource: https://ihechikara.com/posts/how-to-use-route-parameter-in-expressjs/

# Task 8

- In this task you will create a DELETE endpoint to delete items from the studentNames array - The endpoint action is DELETE and its path is /task8/:name
- This endpoint should check if the name is inside the array and delete it
- In case of found, send status 204 with no body.
- Otherwise, send status 404 and body {message: "A student with name (X) is not found!"}
- Replace (X) in the body example with the name parameter

# Task 9

- Create an UPDATE endpoint with the /task9/:name
- The endpoint should only accept a body of {name: string}, otherwise respond with 400 {message: "incorrect payload"} - This endpoint should look for the name from the url param in the array, if it's not found respond with 404 {message: "no student with this name"}
- In case it's found, replace it with the name from the body

# Task 10

- Initialize database
- Install @sequelize/postgres package in your project
- Install PostgreSQL on your machine - Create a database with any name
- Create a table named students with the following columns
- ID: auto increment int, name: string, birthdate: Date, createdAt: Date
- Insert some students into the database
