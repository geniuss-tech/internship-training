import express , {NextFunction, Request , Response} from "express";
import cors from "cors"; 
import { send } from "process";

const app = express()

const port = process.env.PORT || 3000 ;

app.use(cors())

app.use(express.json())


function onlyPassAuthenticated (req: Request , res:Response, next:NextFunction){
    const auth = req.headers["authorization"]
    if (!auth){
        res.status(401).json({message: "meeeeeeen?"})
        return 
    }
    next()
}


const sendJsonSuccess = (req: Request , res:Response) =>{
    res.status(200).json({success : true})
}

app.get('/task1' , (req:Request , res:Response) =>{
    res.type("text/plain").status(200).send("hello world")
})
app.get('/task2', sendJsonSuccess)
app.post('/task2', sendJsonSuccess)
app.patch('/task2' , sendJsonSuccess)
app.put('/task2' ,sendJsonSuccess )
app.delete('/task2' ,sendJsonSuccess )


app.get('/task3' ,onlyPassAuthenticated ,sendJsonSuccess)


app.listen(port , ()=>{
    console.log("listening on port 3000....")
})