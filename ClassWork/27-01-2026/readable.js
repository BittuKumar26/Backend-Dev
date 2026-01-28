const fs=require("fs");
const path=require("path");
const inputFilePath=path.join(__dirname,"input.txt");
console.log("-------> "+__dirname)
console.log("-------> "+inputFilePath)

const readStream=fs.createReadStream(inputFilePath,{encoding:"utf-8",highWaterMark:64*1024});

readStream.on("data",(chunk)=>{
    console.log("Data is Receiving in chunk:",chunk);
});

readStream.on("end",()=>{
    console.log("readStream is ended");
});

readStream.on("error",(err)=>{
    console.log("Error is occured",err.message);
});






