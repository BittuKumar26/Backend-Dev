const fs = require("fs");

fs.appendFile("data.txt", "\nNew line added", (err) => {
  if (err) throw err;
  console.log("Content appended");
});
