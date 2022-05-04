# professional-readme-generator

## Table of Contents

- [Description](#description)
- [Features](#features)
- [User-Story](#user-story)
- [Acceptance-Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Github-Link](#github-link)
- [Deployed-Link](#deployed-link)
- [Contributor](#contributor)

### Description

This application allows users to dynamicaly generate a README for a project user to devote more time to working on a chosen project.

### Features

- AS A developer
- I WANT a README generator
- SO THAT I can quickly create a professional README for a new project

### User Story

- AS AN avid traveler
- I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
- SO THAT my account balance is accurate when I am traveling

### Acceptance Criteria

GIVEN a command-line application that accepts user input

- WHEN I am prompted for information about my application repository
  -- THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- WHEN I enter my project title
  -- THEN this is displayed as the title of the README
- WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  -- THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- WHEN I choose a license for my application from a list of options
  -- THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
- WHEN I enter my GitHub username
  -- THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
- WHEN I enter my email address
  -- THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- WHEN I click on the links in the Table of Contents
  -- THEN I am taken to the corresponding section of the README

### Usage

Application users will need to use Inquirer package. The package can be installed by entering 'npm i inquirer' in the commant line. The application is invoked by using 'node index.js'.

### GitHub Link

https://github.com/jlcunningham2101/budget-tracker

### Contributor

Name: Jill Cunningham
Email: jleighcunningham@gmail.com
GitHub URL: https://github.com/jlcunningham2101
