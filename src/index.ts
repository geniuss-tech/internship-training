import express , {NextFunction, Request , Response} from "express";
import cors from "cors"; 

const app = express()

const port = process.env.PORT || 3000 ;

app.use(cors())
app.use(function (req:Request , res:Response , next:NextFunction){
    res.setHeader("Content-type" , "text/plain")
    next()
})

app.get('/task1' , (req:Request , res:Response) =>{
    res.status(200).send("hello world")
})


app.listen(port , ()=>{
    console.log("listening on port 3000....")
})