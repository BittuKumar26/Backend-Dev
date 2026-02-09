
/*
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


app.post("/students/register", (req, res) => {
    const data=req.body;
    console.log("<<<", data);
    res.json({message: "Student registered successfully", data});
});

// Write the file first
const fs = require('fs');

app.get("/students/file", (req, res) => {
    fs.writeFile('students.json', 'utf8', (err, data) => {
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
            res.status(500).json({ error: "Not read the file content B2 Bhaiya" });
        }
    });
});

// app.post("students/file",(req,res)=>{

// })

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

*/



const express = require("express");
const fs = require("fs");

const app = express();
const port = 8000;

app.use(express.json()); // Middleware

const FILE_PATH = "./students.json";

/* ==========================
   HELPER FUNCTIONS
========================== */

// Read file
const readFile = () => {
    const data = fs.readFileSync(FILE_PATH, "utf8");
    return JSON.parse(data);
};

// Write file
const writeFile = (data) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};

/* ==========================
   GET – Read all students
========================== */
app.get("/students", (req, res) => {
    const students = readFile();
    res.json(students);
});

/* ==========================
   POST – Add new student
========================== */
app.post("/students", (req, res) => {
    const students = readFile();
    const newStudent = req.body;

    students.push(newStudent);
    writeFile(students);

    res.json({ message: "Student added", student: newStudent });
});

/* ==========================
   PUT – Update student by ID
========================== */
app.put("/students/:id", (req, res) => {
    const students = readFile();
    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students[index] = { ...students[index], ...req.body };
    writeFile(students);

    res.json({ message: "Student updated", student: students[index] });
});

/* ==========================
   DELETE – Remove student
========================== */
app.delete("/students/:id", (req, res) => {
    const students = readFile();
    const id = parseInt(req.params.id);

    const filteredStudents = students.filter(s => s.id !== id);
    writeFile(filteredStudents);

    res.json({ message: "Student deleted" });
});

/* ==========================
   SERVER LISTENING
========================== */
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


                                                                                               