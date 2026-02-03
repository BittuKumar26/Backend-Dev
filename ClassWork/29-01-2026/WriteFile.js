const fs = require("fs");

// write file
fs.writeFile("test.txt", "Hello, this is Node.js file writing!", (err) => {
  if (err) {
    console.log("Error:", err);
  } 
  else {
    console.log("File written successfully!");
  }
});
