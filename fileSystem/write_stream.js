const fs = require("fs");

const data = `ek lamba sa text likha hai yha to ise padho aur dimaag me utaro... 
              those who abondon missions are scum but those who abondon there comrades are worst than scum said by kakashi hatake..!! `

let wstream = fs.createWriteStream("temporary.txt"); 
// let rstream = fs.createReadStream("temporary.txt", { highWaterMark: 17 });

arr = [1,2,3,4,5,6,7,8,9];

arr.forEach(element => {
    wstream.write(element);
});

// wstream.write(data.toJSON());

// rstream.on("data", (data) => {
//     wstream.write(data, (err) => {
//         if(err){
//             console.log(err.message);
//         } else {
//             console.log("data written");
//         }
//     });
// });