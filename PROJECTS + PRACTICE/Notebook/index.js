const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs"); // This fs module is used to read the files in the directory

// These two are working as a parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// Here static function is used to render the static files(stylesheets, javascripts,images, etc) present in the public folder..
// here __dirname is used to get the main directory

//Now setting up ejs -> ejs html ki tarah hota hai bus hame kuch extra powers deta op functionalities karne ke liye (npm i ejs)
app.set("view engine", "ejs");

app.get("/", function (req, res, next) {
  fs.readdir(`./files`, function (err, files) {
    console.log(files); // return [] on if files folder is empty on reloading the webpage otherwise the file name
    res.render("index.ejs", { files: files }); //using render as ham inndex.ejs file(views) folder wali ko render kr rhe
  });
});

app.post(`/create`, function (req, res) {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    function (err) {
      res.redirect("/");
    }
  );
});

// app.get("/profile/:username", function (req, res, next) {

//   res.send("Working for any route"); // This is dynamic routing profile/: ke baad kuch bhi route de tab bhi hame output milega
// });

// app.get("/greet/:username/:age", function (req, res) {
//   res.send(`Welcome ${req.params.username} ${req.params.age}`); // ${req.params.username} -> direct username frontend se backend then backend se frontend pe gya
// });

app.listen(3000, function () {
  console.log("Server running");
});
