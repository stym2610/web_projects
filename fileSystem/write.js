const fs = require("fs");

const filePath = "temporary.txt";
let str = "\ni have written something to file...!!"

fs.open(filePath, "a", (err, fd) => {
    if(err){
        console.log(`error: ${err.message}`);
    } else {
        // let bytes = fs.writeSync(fd, str);
        // console.log(`${bytes} bytes`);

        fs.write(fd, str, (err, bytes) => {
            console.log(`${bytes} bytes`);
        })

        fs.close(fd, (err) => {
            console.log("file closed..");
        });
    }
});

