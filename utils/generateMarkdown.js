// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license === "None") {
    return "";
  } else if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "BSD 2-Clause Simplified License") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "BSD 3 Clause New or Revised License") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if (license === "Eclipse Public License 1.0") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (license === "GNU Affero General Public License v3.0") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU General Public License v2.0") {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (license === "Mozilla Public License") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else {
    return "happy";
  }
}

//module.exports = renderLicenseBadge;

//.then and console.log needed to display the data
///.then(function(renderLicenseBadge){
//console.log();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {
  if (licenseLink === "None") {
    return "";
  } else {
    return "* [License](#License)";
  }

  // if (licenseLink === "None") {
  //   return "";
  // } else if (licenseLink === "Apache License 2.0") {
  //   return "https://opensource.org/licenses/Apache-2.0";
  // } else if (licenseLink === "GNU General Public License v3.0") {
  //   return "https://www.gnu.org/licenses/gpl-3.0";
  // } else if (licenseLink === "MIT License") {
  //   return "https://opensource.org/licenses/MIT";
  // } else if (licenseLink === "BSD 2-Clause Simplified License") {
  //   return "https://opensource.org/licenses/BSD-2-Clause";
  // } else if (licenseLink === "BSD 3 Clause New or Revised License") {
  //   return "https://opensource.org/licenses/BSD-3-Clause";
  // } else if (licenseLink === "Boost Software License 1.0") {
  //   return "https://choosealicense.com/licenses/bsl-1.0/";
  // } else if (licenseLink === "Creative Commons Zero v1.0 Universal") {
  //   return "http://creativecommons.org/publicdomain/zero/1.0/";
  // } else if (licenseLink === "Eclipse Public License 1.0") {
  //   return "https://opensource.org/licenses/EPL-1.0";
  // } else if (licenseLink === "GNU Affero General Public License v3.0") {
  //   return "https://www.gnu.org/licenses/agpl-3.0";
  // } else if (licenseLink === "GNU General Public License v2.0") {
  //   return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  // } else if (licenseLink === "Mozilla Public License") {
  //   return "https://choosealicense.com/licenses/mpl-2.0/";
  // }
  ////.then and console.log needed to display the data
  //module.exports = renderLicenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseSection) {
  if (licenseSection === "None") {
    return "";
  } else {
    return `# License
    This application falls under the ${licenseSection}.`;
  }
}
//   if (licenseSection === "None") {
//     return "";
//   } else if (licenseSection === "Apache License 2.0") {
//     return "Apache";
//   } else if (licenseSection === "GNU General Public License v3.0") {
//     return "GNU";
//   } else if (licenseSection === "MIT License") {
//     return "MIT";
//   } else if (licenseSection === "BSD 2-Clause Simplified License") {
//     return "BSD";
//   } else if (licenseSection === "BSD 3 Clause New or Revised License") {
//     return "BSD";
//   } else if (licenseSection === "Boost Software License 1.0") {
//     return "Boost";
//   } else if (licenseSection === "Creative Commons Zero v1.0 Universal") {
//     return "Creative Commons";
//   } else if (licenseSection === "Eclipse Public License 1.0") {
//     return "Eclipse";
//   } else if (licenseSection === "GNU Affero General Public License v3.0") {
//     return "GNU";
//   } else if (licenseSection === "GNU General Public License v2.0") {
//     return "GNU";
//   } else if (licenseSection === "Mozilla Public License") {
//     return "Mozilla";
//   }
// }
//module.exports = renderLicenseSection;

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license);
  return `# ${data.Title}
${renderLicenseBadge(data.license)}
  # Description
  ${data.Description} 
  # Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  ${renderLicenseLink(data.licenseLink)}
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  # Installation
  The following steps are required to install and/or run this application: ${
    data.Installation
  }.
  # Usage
  In order to use this application, you must: ${data.Usage}
  ${renderLicenseSection(data.licenseSection)}
  # Contributing
  The following individual(s) are contributors to this application:${
    data.Contributing
  }.
  # Tests
  The following tests are needed to test this code: ${data.Tests}
  # Questions
  If you have any questions/concerns regarding this application, then feel free to contact me using the following details:
  https://github.com/${data.Github}, ${data.Email}.`;
}

module.exports = generateMarkdown;
