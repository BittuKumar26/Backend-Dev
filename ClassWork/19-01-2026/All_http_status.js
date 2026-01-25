const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/success") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("200 - Success");
  }

  else if (req.url === "/created") {
    res.writeHead(201, { "Content-Type": "text/plain" });
    res.end("201 - Resource Created");
  }

  else if (req.url === "/accepted") {
    res.writeHead(202, { "Content-Type": "text/plain" });
    res.end("202 - Request Accepted");
  }

  else if (req.url === "/unauthorized") {
    res.writeHead(401, { "Content-Type": "text/plain" });
    res.end("401 - Unauthorized Access");
  }

  else if (req.url === "/error") {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("500 - Internal Server Error");
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
