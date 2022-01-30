// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const utils = require("utils");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the name of your application?",
    name: "Project-Title"
}, 
{
    type: "input",
    message: "What does your application do? What technologies did you utilize and why? Did you encounter any challenges? Are there features you would like to implement in the future?",
    name: "Description"
}, 
{
    type: "input",
    message: "Table of Contents",
    name: "Table-of-Contents"
}, 
{
    type: "input",
    message: "What steps are required to install and/or run this application? Be sure to adcise if there are any required dependencies.",
    name: "Installation-Instructions"
}, 
{
    type: "input",
    message: "Please provide detailed instructions on how to use this application. Feel free to share screnshots to aid in understanding.",
    name: "Usage-Information"
}, 
{
    type: "input",
    message: "Choose a license to tell others what they can and can't do with your application.",
    name: "License"
}, 
{
    type: "input",
    message: "",
    name: "Contributing-Guidelines"
}, 
{
    type: "input",
    message: "",
    name: "Test-Instructions"
}, 
{
    type: "input",
    message: "Please include your contact details below for additional questions and/or concerns.",
    name: "Questions"
}, 
{
    type: "input",
    message: "What is your GitHub username?",
    name: "GitHub"
}, 
{
    type: "input",
    message: "What is your email address?",
    name: "Email"
}, 
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, function(error){
        console.log(fileName)
        console.log(data)
        if (error) {
            return console.log (error)
        }
        else { 
            console.log("success")
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
