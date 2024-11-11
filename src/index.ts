import express, { Request, Response } from 'express';
const app = express();
app.use(express.json()); // Parses incoming JSON requests
const PORT = 3014;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a type for Student

// Array to store student names as Student objects
const studentNames: string[] = ['3omda','Khalifa'];

// GET endpoint to retrieve all student names

app.get('/task6/students',(req:Request,res:Response)=>{
    res.status(200).json(studentNames);
});


// POST endpoint to add a student name
app.post('/task6/students', (req: Request, res: Response) => {
    let newname = req.body.name;
    if (!newname || typeof newname !== 'string') {
        res.status(400).send("eb3at al request 3edel m4 na2sa bugs");
    }
    studentNames.push(newname);  
    res.status(201).json({ message :`Student added succeffully ${newname}`});
});
// Task 7: GET endpoint with route parameter to check for student name
app.get('/task7/:name', (req: Request, res: Response) => {

    const sentName =req.params.name;
    const found = studentNames.find((name) => name.toLowerCase() === sentName.toLowerCase());
    if (found) {
        res.status(200).json({found: true});
    } else {
        res.status(404).json({found: false});
    }

});
    // // Task 8: DELETE endpoint to delete a student by name
    app.delete('/task8/:name', (req: Request, res: Response) => {
        const{name}   = req.params;
        const found = studentNames.find((name) => name.toLowerCase() === name.toLowerCase());
        if (found) {
            studentNames.splice(studentNames.indexOf(found), 1);
            res.status(204).send();
        } else {
            res.status(404).json({
                message: `A student with name (${name}) is not found!`
            });
        }
    });
    
    // Task 9: UPDATE endpoint to update a student's name
    app.put('/task9/:name', (req: Request, res: Response): void => {
        const { name } = req.params; // الاسم القادم من الـ route
        const { name: newName } = req.body; // الاسم الجديد من body
    
        // Validate the request body
        if (!newName || typeof newName !== 'string') {
            res.status(400).json({
                message: "Incorrect payload"
            });
            return;
        }
    
        // Find the student in the array
        const found = studentNames.find((student) => student.toLowerCase() === name.toLowerCase());
    
        if (!found) {
            res.status(404).json({
                message: "No student with this name"
            });
        } else {
            // Find the index of the found student
            const index = studentNames.indexOf(found);
    
            if (index !== -1) {
                studentNames.splice(index, 1, newName); // Replace the old name with the new name
            }
    
            res.status(200).json({
                message: "Student name updated successfully"
            });
        }
    });
    
// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});