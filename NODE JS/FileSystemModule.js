const fs = require("node:fs"); // Is code ka ye matlab hai  ki hamne ( fs ) module ko node se bahar nikal hai aur fs naam ke variable me store kr liya hai joki fs module ki functionality use karega sari

// We will learn about some  API's in the file system
// writeFile
// appendFile
// copyFile
// rename
// unlink

// We are using callback that is other name for funcion to control the error

//1 -> writeFile API ::-> fs.writeFile(file, data[, options], callback) // callback -> function
fs.writeFile("text.txt", "Hello Ansh, the file is created", function (err) {
  if (err) console.error(err);
  else console.log("Done file is written");
});

// 2-> appendFile API ::-> fs.appendFile(file, data[, options], callback)
fs.appendFile(
  "text.txt",
  " this is the appended code in the file",
  function (err) {
    if (err) console.error(err);
    else console.log("Done file is Appended");
  }
);

// 3-> renameFile API ::-> fs.rename(oldPath, newPath, callback)
fs.rename("text.txt", "Test.txt", function (err) {
  if (err) console.error(err);
  else console.log("File Renamed");
});

// 4-> copyFile function ::-> fs.copyFile(src, dest[, mode], callback)
fs.copyFile("Test.txt", "./copyFile/Copy.txt", function (err) {
  // Writing the directory
  if (err) console.error(err);
  else console.log("Copying done");
});

// 5-> unlink ::-> fs.unlink(path, callback)
fs.unlink("Test.txt", function (err) {
  if (err) console.error(err);
  else console.log("File removed");
});
