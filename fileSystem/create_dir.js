const fs = require("fs");

let dirNames = {
    sync : "createdDir",
    async : "asynccreatedDir"
};
function boom(){
    console.log("boom");
};

fs.mkdir(dirNames.async, (err) => {
    //handle errors here..
    fs.writeFileSync("asynccreatedDir/boom.js", `(${boom.toString()}())`);
});