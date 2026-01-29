/*
const fs = require("fs");

try {
  fs.copyFileSync("source.txt", "copy.txt");
  console.log("File copied successfully");
} catch (err) {
  console.error(err);
}


 */


const fs = require("fs");  

fs.copyFile("source.txt", "copy.txt", (err) => {
  if (err) throw err;  
  console.log("File copied successfully");  
});

