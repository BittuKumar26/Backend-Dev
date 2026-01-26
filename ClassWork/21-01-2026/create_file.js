
// Create a new file

const fs = require("fs");
fs.writeFile("newfile.txt", "this is new file", (err) => {
    if (err) {
        console.log("Error while creating file");
        return;
    }
    console.log("File is created");
});


/*

const fs = require("fs");
fs.writeFile("example.txt", "Hello Node.js", (err) => {
  if (err) throw err;
  console.log("File created successfully");
});

*/