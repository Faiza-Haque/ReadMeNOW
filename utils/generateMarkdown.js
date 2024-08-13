// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
/*function renderLicenseBadge(license) {
  if (licenseType === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg%29)';
  } else if (licenseType === 'GPLv3') {
    return '![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg%29)';
  } else if (licenseType === 'GPL') {
    return '![GPL license](https://img.shields.io/badge/License-GPL-blue.svg%29)';
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === "None") {
    return ``;
  }
  return `This application is covered by [${license}](${renderLicenseLink(license)}).`;
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license.toLowerCase()) {
    case "mit":
      return "https://opensource.org/licenses/MIT";
    case "gpl-3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.html";
    default:
      return "License link not found.";
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "None") {
    return ``;
  }
  return `This application is covered by [${license}](${renderLicenseLink(license)}).`;
}





// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ``;
  }
  return `This application is covered by [${license}](${renderLicenseLink(license)}).`;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  ##Project Title
  ${data.title}
  ## Key Features
  ${data.description}
  ##Table of Contents
  * [Project Title](#installation)
  * [Key Features](#key-features)
  * [Install](#install)
  * [Credits](#credits)
  * [License](#license)
  ##Install
  ${data.installation}
  ##Credits
  ${data.contributing}
  ##License
  ${renderLicenseSection(data.license)}
  ##Questions
![Link to my GutHub Profile](https://github.com/${data.github})
For questions, please reach out to me at ${data.email}
`;
}
module.exports = generateMarkdown;*/
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'GPLv3') {
    return '![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'GPL') {
    return '![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license.toLowerCase()) {
    case 'mit':
      return 'https://opensource.org/licenses/MIT';
    case 'gplv3':
      return 'https://www.gnu.org/licenses/gpl-3.0.html';
    case 'gpl':
      return 'https://www.gnu.org/licenses/gpl-2.0.html';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `This application is covered by [${renderLicenseBadge(license)}](${renderLicenseLink(license)}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Project Title
${data.title}

## Key Features
${data.description}

## Table of Contents
* [Project Title](#project-title)
* [Key Features](#key-features)
* [Install](#install)
* [Usage](#usage)
* [Contributions](#contributions)
* [License](#license)

## Install
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributing}

## License
${renderLicenseSection(data.license)}

## Questions
[Link to my GitHub Profile](https://github.com/${data.github})
For questions, please reach out to me at ${data.email}
`;
}

module.exports = generateMarkdown;