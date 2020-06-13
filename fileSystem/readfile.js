const filePath = "temporary.txt";

const fs = require("fs");

let fileSize = fs.statSync(filePath).size;

let buf = new Buffer(fileSize);

fs.open(filePath, "r+", (err, fd) => {
    if(err) {
        console.log(`error code : (${err.code})\n message : (${err.message})`);
    } else {
        console.log(`file (${filePath}) successfully opened`);

        fs.read(fd, buf, 0, fileSize, 0, (err, bytes) => {
            console.log(`size: ${bytes}`);
            console.log(`content of file : ${buf}`);
        });

        fs.close(fd, (err) => {
            console.log("file closed!");
        });
    }
});