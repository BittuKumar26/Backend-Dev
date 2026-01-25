
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 - Page Not Found");
});

server.listen(3004, () => {
  console.log("Server running at http://localhost:3004");
});
