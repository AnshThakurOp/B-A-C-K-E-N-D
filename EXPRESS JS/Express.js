const express = require("express"); //Importing the express functionality in the express const
const app = express(); // Giving all the functionality  of express function to app const

// <---------------------------------------------------------------------------------------------------->
// app.get("route", requestHandler(function(){})  // this functionality of express is used to show different things o differeent routes (routes is nothing but the thing writtern after domain)...
//   res.send("Hello World");
// });
app.get("/", function (req, res) {
  res.send(
    "This is domain output and updated to restart the server automatically(by nodemon)."
  );
});

app.get("/route1", function (req, res) {
  res.send("This is the route one output.");
});
app.get("/route2", function (req, res) {
  res.send("This is the route two output.");
});

app.listen(3000);
