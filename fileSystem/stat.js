const filePath = "temporary.txt";

const fs = require("fs");

// let stats = fs.statSync(filePath);        SYNCHRONOUS
// console.log(stats);

fs.stat(filePath, (err, stats) => {        //ASYNCHRONOUS
    if(err) throw err;
    else console.log(stats.size);
})