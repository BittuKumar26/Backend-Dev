const express=require('express');
const app=express();
const port=8000;

const students= [
    {id: 1, name: 'Bittu', age: 20, branch: 'Computer Science'},
    {id: 2, name: 'Sham', age: 22, branch: 'Mechanical'},
    {id: 3, name: 'Aadi', age: 21, branch: 'Electrical' },
];


app.get("/", (req, res) => {
    res.send("/welcome to home page");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/search", (req, res) => {
    
});

// app.get("/students/:id", (req, res) => {
     
// });

app.post("/students/register", (req, res) => {
    const data=req.body;
    console.log("<<<", data);
    res.json({message: "Student registered successfully", data});
});

// Read the file first
const fs = require('fs');

app.get("/students/file", (req, res) => {
    fs.readFile('students.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).json({ error: "Failed to read students data" });
            return;
        }
        try {
            const studentsFromFile = JSON.parse(data);
            res.json(studentsFromFile);
        } catch (parseErr) {
            console.error("Error parsing JSON:", parseErr);
            res.status(500).json({ error: "Failed to parse students data" });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});




 