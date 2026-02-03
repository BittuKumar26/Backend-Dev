const fs = require("fs");

// write file
fs.writeFile("demo.txt", "Node.js is awesome! Bittu Bhaiya", (err) => {
  if (err) throw err;
  console.log("File created Successfully B2!");

  // read file
  fs.readFile("demo.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
  });
});
