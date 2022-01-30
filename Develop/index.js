// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const utils = require("utils");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the name of your application?",
    name: "Title"
}, 
{
    type: "input",
    message: "What does your application do? What technologies did you utilize and why? Did you encounter any challenges? Are there features you would like to implement in the future?",
    name: "Description"
}, 
{
    type: "input",
    message: "Table of Contents",
    name: "Contents"
}, 
{
    type: "input",
    message: "What steps are required to install and/or run this application? Be sure to adcise if there are any required dependencies.",
    name: "Installation"
}, 
{
    type: "input",
    message: "Please provide detailed instructions on how to use this application.",
    name: "Usage"
}, 
{
    type: "input",
    message: "What license does your application use?",
    name: "License"
}, 
{
    type: "input",
    message: "Who is contributing to this application.",
    name: "Contributing"
}, 
{
    type: "input",
    message: "Please provide instructions for testing your code.",
    name: "Tests"
}, 
{
    type: "input",
    message: "Please include your contact details below for additional questions and/or concerns.",
    name: "Questions"
}, 
{
    type: "input",
    message: "What is your GitHub username?",
    name: "Github"
}, 
{
    type: "input",
    message: "What is your email address?",
    name: "Email"
}, 
]

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log (error)
        }
        else { 
            console.log("README is complete")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
