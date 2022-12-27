// This file basically creates a new directory

const fs = require('fs');

if(!fs.existsSync('./new')){
    fs.mkdir("./new", (err) => {
        if(err) throw err;
        console.log("Directory created");
    })
}

// Deleting a directory that exists
if(fs.existsSync('./new')){
    fs.rmdir('./new',(err) => {
        if(err) throw err;
        console.log('Directory deleted!');
    })
}