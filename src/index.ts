import express , {NextFunction, Request , Response} from "express";
import cors from "cors"; 
import { send } from "process";
import dotenv from "dotenv";

dotenv.config()


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


const onlyPassAuthorized = (admin_name : string) =>{
    return (req: Request , res:Response, next:NextFunction)=>{
        const auth_head = req.headers["authorization"]
        if (auth_head === admin_name){
            next()
        }else{
            res.status(403).json({message: `malek4 access hna ya ${admin_name} roo7 el3ab b3eed`})
            return
        }
    }
}

const sendJsonSuccess = (req: Request , res:Response) =>{
    res.status(200).json({success : true})
}
// task 1

app.get('/task1' , (req:Request , res:Response) =>{
    res.type("text/plain").status(200).send("hello world")
})

// task 2
app.get('/task2', sendJsonSuccess)
app.post('/task2', sendJsonSuccess)
app.patch('/task2' , sendJsonSuccess)
app.put('/task2' ,sendJsonSuccess )
app.delete('/task2' ,sendJsonSuccess )

// task 3
app.get('/task3' ,onlyPassAuthenticated ,sendJsonSuccess)
// task 4

app.get('/task4' ,[onlyPassAuthenticated,onlyPassAuthorized("ya 3m efta7 ana 3omda")] ,sendJsonSuccess)

// task 5

app.get('/task5/get-admin-name',(req:Request , res:Response)=>{
    res.status(200).json({admin_name : process.env.admin_name})
})

app.get('/task5/admin-only',[onlyPassAuthenticated,onlyPassAuthorized(process.env.admin_name as string)] ,sendJsonSuccess)



// task 6

let studentNames : string[] = []

app.get('/task6/students', (req: Request , res:Response)=>{
    
    res.status(200).json(studentNames) 
})

app.post('/task6/students', (req: Request , res:Response)=>{
    const {name} = req.body

    if(name && typeof(name) === "string"){
        studentNames.push(name)
        res.status(200).json({message: `${name} has been added`})
    }else{
        res.status(400).json({message: "eb3at al request 3edel m4 na2sa bugs"})
    }
})

app.get('/task7/:name',(req : Request , res : Response)=>{
    const {name} = req.params

    let found = studentNames.find((student)=> student == name)
    
    if(found){
        res.status(200).json({found : true})
    }else{
        res.status(404).json({found :false})
    }
})


app.listen(port , ()=>{
    console.log("listening on port 3000....")
})