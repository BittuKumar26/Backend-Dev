const fs=require("fs");
const path=require("path");

const inputFilePath=path.join(__dirname, "input.txt")

const outputFilePath=path.join(__dirname, "output.txt")

const x=fs.createReadStream(inputFilePath,{encoding:"utf-8"});

const writeStream=fs.createWriteStream(outputFilePath)

x.pipe(writeStream)

writeStream.on("finsih",()=>{
    console.log("Writting Stream is end")
    
});