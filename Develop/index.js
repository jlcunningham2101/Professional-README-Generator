// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
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
        console.log('Please enter the title of your application.');
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
            console.log('Please enter the description of your application!');
            return false;
          }
        }
      },

{
    type: "input",
    name: "Installation",
    message: "What steps are required to install and/or run this application? Be sure to advise if there are any required dependencies.",
    validate: installationInput => {
        if (installationInput) {
            return true;
          } else {
            console.log('Please enter the installation instructions for your application.');
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
            console.log('Please enter the usage information about your application.');
            return false;
          }
        }
      },
{
    type: "list",
    name: "License",
    message: "Which license does your application use?",
    choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3 Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0','Mozilla Public License'],
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
    message: "Who is contributing to this application?",
    validate: contributingInput => {
        if (contributingInput) {
            return true;
          } else {
            console.log('Please enter details regarding application contributors.');
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
            console.log('Please provide test instructions for yout application.');
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

