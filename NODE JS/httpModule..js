const http = require("node:http");
const server = http.createServer(function (req, res) {
  res.end("The server is running on port 3000");
});
server.listen(3000);
