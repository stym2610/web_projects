const fs = require('fs');

let readStream = fs.createReadStream('temporary.txt', {highWaterMark: 17, encoding: 'utf8'});

readStream.on("string", (data) => {
    console.log("event listened..");
});

readStream.on("data", (data) => {
    if(data.indexOf("permanent") === -1){
        console.log(`data: ${data.toUpperCase()}`);
        readStream.emit("string", data);
    } else {
        console.log(`data: ${data.toLowerCase()}`);
    }
});



