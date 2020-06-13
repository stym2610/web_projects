const fs = require("fs");

const filePath = "temporary.txt";
let data = "OFFSETi have written something to file...!!\n"

let buf = Buffer.from(data, "utf8");
const offset = 6;

fs.open(filePath, "a", (err, fd) => {
    if(err){
        console.log(`error: ${err.message}`);
    } else {

        fs.write(fd, buf.toJSON(), offset, buf.byteLength - offset, 0, (err, bytes) => {
            //always error handling here...!!!!
            console.log(`${bytes} bytes written..`);
        });
       

        fs.close(fd, (err) => {
            console.log("file closed..");
        });
    }
});

