import express, { Request, Response , NextFunction} from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;
app.use(cors());

// GET /task1 endpoint
app.get('/task1', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/plain'); // Ensure correct content-type
  res.status(200).send('hello world');         // Ensure exact response
});

// Callback used in task 2 and 3
function sendJsonSuccess(req: Request, res: Response) {
    res.status(200).json({ success: true });   
}

//middleware used in task 3
function onlyPassAuthenticated(req :Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    if (authHeader) {
        next(); // Authorization exists, proceed to the next middleware/route handler
    } else {
        res.status(401).json({ message: "meeeeeeen?" }); // No authorization header, respond with 401
    }
}

 //task 3
 app.get('/task3', onlyPassAuthenticated, sendJsonSuccess); 
// GET /task2 endpoint
app.get('/task2', sendJsonSuccess);

// POST /task2 endpoint
app.post('/task2', sendJsonSuccess);

// PATCH /task2  endpoint
app.patch('/task2', sendJsonSuccess);

// PUT /task2 endpoint
app.put('/task2', sendJsonSuccess);

// DELETE /task2 endpoint
app.delete('/task2', sendJsonSuccess);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});