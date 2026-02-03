const express=require('express');
const app=express();
const port=8000;

const students= [
    {id: 1, name: 'Bittu', age: 20, branch: 'Computer Science'},
    {id: 2, name: 'Sham', age: 22, branch: 'Mechanical'},
    {id: 3, name: 'Aadi', age: 21, branch: 'Electrical' },
];


// http://localhost:8000/students/


app.get("/", (req, res) => {
    res.send("/welcome to home page");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const id = req.params.id;
    const student=students.find(s => s.id === parseInt(id));
    if(student) {
        res.json(student);
    } 
    else {
        res.status(404).send("Student not found");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



// Rest API Methods:
// post,
// get,
// put, 
// delete
