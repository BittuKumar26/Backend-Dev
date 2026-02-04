
// 403 Forbidden occurs when the client is authenticated but does not have permission to access the resource.

// post.js
const express = require("express");
const app = express();
const port = 8001;

app.use(express.json());

const students = [];

// Register new student
app.post("/students/register", (req, res) => {
  const { name, age, branch } = req.body;

  if (!name || !age || !branch) {
    return res.status(400).send("All fields are required");
  }

  const newStudent = {
    id: students.length + 1,
    name,
    age,
    branch
  };

  students.push(newStudent);
  res.status(201).json({
    message: "Student registered successfully",
    student: newStudent
  });
});

app.listen(port, () => {
  console.log(`POST server running at http://localhost:${port}`);
});
