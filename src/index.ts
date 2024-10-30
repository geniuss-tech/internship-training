import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;
app.use(cors());

// GET /task1 endpoint
app.get('/task1', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/plain'); // Ensure correct content-type
  res.status(200).send('hello world');         // Ensure exact response
});

// Callback function to send success response
function sendJsonSuccess(req: Request, res: Response) {
    res.status(200).json({ success: true });
}

// GET endpoint
app.get('/task2', sendJsonSuccess);

// POST endpoint
app.post('/task2', sendJsonSuccess);

// PATCH endpoint
app.patch('/task2', sendJsonSuccess);

// PUT endpoint
app.put('/task2', sendJsonSuccess);

// DELETE endpoint
app.delete('/task2', sendJsonSuccess);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});