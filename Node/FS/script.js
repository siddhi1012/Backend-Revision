import fs from "fs";

// Write File
fs.writeFile("hello.txt", "Hello I am Siddhi Gavhane", (err) => {
    if (err){
        console.log("error"); 
    }else{
        console.log("Done");
    }

})


// Append File
fs.appendFile("hello.txt", "\n I am from Pune. A City of Culture and Education", (err) => {
    if (err){
        console.log("error"); 
    }else{
        console.log("Done");
    }

})

// Rename File 
fs.rename("hello.txt","hey.txt",(err) =>{
    if(err){
        console.log("Error");
    }else{
        console.log("Done")
    }
})

// Copy File 
fs.copyFile("hey.txt","./copy/test.txt", (err) => {
    if (err){
        console.log(err.message,"error"); 
    }else{
        console.log("Done");
    } 
});

// unlink
fs.unlink("hey.txt", (err) => {
    if (err){
        console.log("error"); 
    }else{
        console.log("Removes File Succesfully");
    }
})


// remove directory
fs.rmdir("./copy", { recursive: true }, (err) => {
    if (err) console.log("err");
    else console.log("Removed");
})

// Read File 
fs.readFile("test.txt","utf8", (err, data) => {
    if (err) console.log(err);
    else console.log(data);
})