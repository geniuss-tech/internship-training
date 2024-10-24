import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// define endpoints
app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
  });
app.get('/task1/', (req, res) => {
    // Set the content type to plain text and send the response
    res.status(200).contentType('text/plain').send('hello world');
  });


  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });