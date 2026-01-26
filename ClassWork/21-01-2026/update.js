const fs = require("fs");

fs.writeFile("data.txt", "Updated content", (err) => {
  if (err) throw err;
  console.log("File updated");
});
