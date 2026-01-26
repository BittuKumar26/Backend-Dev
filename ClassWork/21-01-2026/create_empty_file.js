const fs = require("fs");

fs.open("empty.txt", "w", (err, file) => {
  if (err) throw err;
  console.log("Empty file created");
});
