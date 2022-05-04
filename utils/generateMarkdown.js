// Function returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "Apache 2.0":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      break;
    case "GNU GPL v2":
      badge =
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
      break;
    case "BSD":
      badge =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
      break;
    case "None":
      badge = "";
      break;
  }
  return badge;
}

// Function returns the license link
// If there is no license, return an empty string

function renderLicenseLink(badge) {
  console.log(badge);
  let link = badge;
  switch (badge) {
    case "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]":
      link += "(https://opensource.org/licenses/MIT)";
      break;
    case "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]":
      link += "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]":
      link += "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]":
      link += "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "None":
      link = "";
      break;
  }
  console.log(link);
  return link;
}

// Function returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = "";
  if (license != "") {
    var licenseBadge = renderLicenseBadge(license);
    licenseLink = renderLicenseLink(licenseBadge);
    return licenseLink;
  } else {
    return licenseLink;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
 
  ## Installation
  ${data.instructions}
  ## Usage
  ${data.usage}
  ## License
  This application uses the following license: ${renderLicenseSection(
    data.license
  )}.
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  Have any questions? Feel free to reach out to me using the details below:
  - Github: ${data.username}
  - Github Profile: ${data.profile}
  - Email Address: ${data.email}
  
`;
}

module.exports = generateMarkdown;
