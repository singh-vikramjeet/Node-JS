// To run this project, use npm run dev
// and that will run the dev script for us

// command used to install nodemon package
// sudo npm install nodemon -g
// We use -g to install the package globally

//console.log('testing!');

// How to add a package to our Project?
// First, we need to initialize npm for our project just like git init
// Run the npm init -y command in the terminal in the project root folder
// -y flag skips all the questions

// npm init command creates the package.json file for our project.
// package.json file contains all the dependencies required for the project
// Any new npm packages installed go in the dependencies section of package.json

// Never push node modules to github
// Add node_modules in the .gitignore file

// Whenever you clone a node project from github, 
// run npm install command to install all the required dependencies for the project

// Command to add nodemon as dev dependency (To add nodemon in package.json)
// Run sudo npm i nodemon -D

// A server uses the scripts to run our application
// Start script, Dev script, Build script
// Use npm run dev to run the dev script
// To add another dependency to our project, stop the nodemon server
// with Ctrl + C
// then run sudo npm install uuid

// Start of the index.js

const { format } = require('date-fns');

// Import v4 as uuid
const { v4: uuid} = require('uuid');

// The above line can also be written as
//const uuid = require('uuid');
// uuid is an object, we just need to use v4 property of uuid object
// For this to work, we need to use uuid.v4 in our code

/*
"date-fns": "^2.29.3" (major-version.minor-version.patch)
In the dependency name above from package.json, we have three sections
1) Major Version : 2
2) Minor Version: 29
3) Patch: 3

^ (caret symbol) in front means allow an update to the minor version and patch
but don't update the major version

If we don't put any symbol in front of dependency number, then only that specific version
will work for that project

~(tilda) in front of the dependency number means only update the patch number
* (astertick) means use the latest version everytime

To install a specific version of a package use
npm install uuid@8.3.1

To update dependencies, run 
npm update

To uninstall a package,run 
npm rm nodemon -D

*/

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log(uuid());

console.log();