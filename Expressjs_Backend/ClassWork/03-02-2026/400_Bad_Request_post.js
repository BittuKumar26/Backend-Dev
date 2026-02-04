
// 400 Bad Request occurs when the client sends invalid or incomplete data.


const express = require("express");
const express = require("express");
const app = express();
const port = 8000;

const students = [
  { id: 1, name: "Bittu", age: 20, branch: "Computer Science" },
  { id: 2, name: "Sham", age: 22, branch: "Mechanical" },
  { id: 3, name: "Aadi", age: 21, branch: "Electrical" }
];

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

// Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Get student by ID
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (student) {
    res.json(student);
  } 
  else {
    res.status(404).send("Student not found");
  }
});

app.listen(port, () => {
  console.log(`GET server running at http://localhost:${port}`);
});
