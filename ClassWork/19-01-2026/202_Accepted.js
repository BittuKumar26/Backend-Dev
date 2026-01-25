const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/plain" });
  res.end("202 - Request Accepted");
});

server.listen(3002, () => {
  console.log("Server running at http://localhost:3002");
});
