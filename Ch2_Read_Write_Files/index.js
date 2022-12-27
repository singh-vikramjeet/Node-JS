//const fs = require('fs');
const path = require('path');

const fsPromises = require('fs').promises;

const fileOps = async() => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
        console.log(data);
        // Deleting the starter.txt file using unlink function
        await fsPromises.unlink(path.join(__dirname,'files','starter.txt'));
        await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'), "\n\n Append this text to the file");
        await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname,'files','promiseComplete.txt'),'utf8');
        console.log(newData);

    } catch(err){
        console.error(err);
    }
}

fileOps();

// Hardcoding the file name
// fs.readFile('./files/starter.txt','utf8',(err,data) => {
//     if(err) throw err;
//     console.log(data);
// })

// Using the path to send filename
// fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// The line below is printed before the readFile function output
// because readFile uses Asynchronous functions
console.log("Hello...");

// Code below is an example of Callback Hell
// First, we write data to a file 
// then, we append data to a file
// then, we rename the file
// To ensure all the above operations, run in the correct order, we
// need to have nested callbacks
// fs.writeFile(path.join(__dirname,'files','reply.txt'), "Nice to meet you",(err) => {
//     if(err) throw err;
//     console.log("Write complete");

//     fs.appendFile(path.join(__dirname,'files','reply.txt'), "\nAppend some text to the file",(err) => {
//         if(err) throw err;
//         console.log("Append complete");

//     // Rename the file
//     fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','newReply.txt'),(err) => {
//         if(err) throw err;
//         console.log("Rename complete");
//     })
//     })

   
// })



// Append data to a file
// Move appendFile function inside the callback function of writeFile because
// due to asynchronous nature of nodeJS, appendFile function may be executed before writeFile
// By putting appendFile inside writeFile, we ensure that writeFile is executed before appendFile

// fs.appendFile(path.join(__dirname,'files','reply.txt'), "\nAppend some text to the file",(err) => {
//     if(err) throw err;
//     console.log("Append complete");
// })


// Method for handling exceptions (from Node JS Documentation)
// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})