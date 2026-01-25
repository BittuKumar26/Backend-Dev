const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(401, { "Content-Type": "text/plain" });
  res.end("401 - Unauthorized Access");
});

server.listen(3003, () => {
  console.log("Server running at http://localhost:3003");
});
