const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const myURL = url.parse(req.url, true);

  res.end(`Name: ${myURL.query.name}, Age: ${myURL.query.age}`);
});

server.listen(3000);
console.log("Server running at http://localhost:3000");