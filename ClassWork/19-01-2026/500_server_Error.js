 
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(500, { "Content-Type": "text/plain" });
  res.end("500 - Internal Server Error");
});

server.listen(3005, () => {
  console.log("Server running at http://localhost:3005");
});
