// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const promptProject = () => {
  console.log(`
  ===============
  Add a New Project
  ===============
    `);
}
const promptUser = () => {
    return inquirer.prompt ([
{
    type: "input",
    name: "Title",
    message: "What is the name of your application?",
    validate: titleInput => {
    if (titleInput) {
        return true;
      } else {
        console.log('Please enter the title of your project.');
        return false;
      }
    }
  },
{
    type: "input",
    name: "Description",
    message: "What does your application do? What technologies did you utilize and why? Did you encounter any challenges? Are there features you would like to implement in the future?",
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter the description of your project!');
            return false;
          }
        }
      },

{
    type: "input",
    name: "Installation",
    message: "What steps are required to install and/or run this application? Be sure to adcise if there are any required dependencies.",
    validate: installationInput => {
        if (installationInput) {
            return true;
          } else {
            console.log('Please enter the installation instructions for your project.');
            return false;
          }
        }
      },
{
    type: "input",
    name: "Usage",
    message: "Please provide detailed instructions on how to use this application.",
    validate: usageInput =>{
        if (usageInput) {
            return true;
          } else {
            console.log('Please enter the usage information about your project.');
            return false;
          }
        }
      },
{
    type: "list",
    name: "License",
    message: "Which license does your application use? Check the one that applies.",
    choices: ['Unlicensed', 'Apache 2.0','MIT', 'Eclips'],
    validate: licenseInput => {
        if (licenseInput) {
            return true;
          } else {
            console.log('Please click the checkbox for the license your peoject uses.');
            return false;
          }
        }
      },
{
    type: "input",
    name: "Contributing",
    message: "Who is contributing to this application.",
    validate: contributingInput => {
        if (contributingInput) {
            return true;
          } else {
            console.log('Please enter details regarding project contributors.');
            return false;
          }
        }
      }, 
{
    type: "input",
    name: "Tests",
    message: "Please provide instructions for testing your code.",
    validate: testsInput => {
        if (testsInput) {
            return true;
          } else {
            console.log('Please provide test instructions for yout project.');
            return false;
          }
        }
      }, 
{
    type: "input",
    name: "Github",
    message: "What is your GitHub username?",
    validate: githubInput => {
        if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username.');
            return false;
          }
        }
   }, 
{
    type: "input",
    name: "Email",
    message: "What is your email address?",
    validate: emailInput => {
        if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address to proceed.');
            return false;
          }
        }
      }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
    if (err) throw err;
    //return console.log(err)

    console.log('README is complete')
    });
  }

// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then(function(data){
      console.log('inside.then')
      console.log(data)
        writeToFile("README.md", generatorMarkdown(data));
    });
}

// Function call to initialize app
init();

