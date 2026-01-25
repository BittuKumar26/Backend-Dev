const http = require("http");

http.createServer((req, res) => {
  if (req.url.startsWith("/user")) {
    res.end("User Page");
  }
}).listen(3000);
console.log("Server running at http://localhost:3000");