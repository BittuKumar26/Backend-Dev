const fs = require("fs");

// Check if copied.txt exists
try {
    fs.readFileSync("copied.txt", "utf-8");
    console.log("File is copied");
} 
catch (err) {
    console.log("Error while copying file");
}
 

/*
const fs = require("fs");

fs.copyFile("source.txt", "copy.txt", (err) => {
  if (err) throw err;
  console.log("File copied successfully");
});
*/