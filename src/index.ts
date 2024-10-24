import express from "express"
import cors from "cors"
const app = express();
app.use(cors());
const port = 3000;

app.get('/task1', (req,res) => {
    res.setHeader('content-type', 'text/plain').status(200).send('hello world');
    console.log(res.getHeader('content-type'));
    
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});