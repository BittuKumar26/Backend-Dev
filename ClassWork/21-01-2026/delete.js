// Delete the file AFTER creation

const fs = require("fs");
fs.unlink("newfile.txt", (err) => {
    if (err) {
        console.log("Error while deleting file");
        return;
    }
    console.log("File deleted");
});


/*
const fs = require("fs");

fs.unlink("copy.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});

*/