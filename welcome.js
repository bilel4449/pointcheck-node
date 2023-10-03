const fs=require("fs");
console.log("start");
let data=fs.readFileSync("welcome.txt");
console.log(data.toString());
console.log("finish");