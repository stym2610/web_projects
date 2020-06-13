const fs = require("fs");

const dirpath = "../fileSystem";
let buf = Buffer.from(dirpath);

// let files = fs.readdirSync(dirpath);      SYNCHRONOUS
// console.log(files);


fs.readdir(buf, "utf8", (err, files) => {
    console.log(files);
});