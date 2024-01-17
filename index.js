const express = require("express");
const server = express();

server.get("/", function (req, res) {
  res.send("<h1>Hello World</h1> <br> <a href='/boye'>Visit Boye</a>");
});

server.get("/boye", function (req, res) {
  res.send("<h1>Hello Boye</h1> <br/> <a href='/'>Go back home</a>");
});

server.listen(3000, function () {
  console.log("server listening on port 3000");
});
