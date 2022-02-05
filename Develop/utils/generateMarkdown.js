// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === "Apache 2.0") {
  return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

} 

else if (license === "MIT") {
 return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}

else if (license === "Eclipse"){
  "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
}

else {
  return ""
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
 
  # Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)


  # Description
  ${data.Description} 
  
  # Contents
  ${data.Contents}

  # Installation
  ${data.Installation}

  # Usage
  ${data.Usage}

  # License
  ${renderLicenseBadge (data.License)}

  # Contributing
  ${data.Contributing}

  # Tests
  ${data.Tests}

  # Questions
  If you have additional questions, then feel free to contact me:
  ${data.Github}
  ${data.Email}
    `
}



module.exports = generateMarkdown;
