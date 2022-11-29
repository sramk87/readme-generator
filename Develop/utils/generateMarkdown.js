const fs = require('fs');
const inquirer = require('inquirer');

/* function that returns a license badge based on which license is passed in, 
if there is no license, return an empty string */
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'ISC') {
      badge = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
  } else {
    badge = ""
  }
  return badge;
}

/* function that returns the license link
if there is no license, return an empty string */
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if (license === 'Apache 2.0') {
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === 'ISC') {
      licenseLink = 'https://opensource.org/licenses/Apache-2.0'
    } else {
      licenseLink = ""
    }
    return licenseLink;
}

/* function that returns the license section of README
if there is no license, return an empty string */
function renderLicenseSection(license) {
  let licenseAns = ''
  if(license === 'None') {
    licenseAns = ''
  } else {
    licenseAns =
    `License: ${license} `
  }
  return licenseAns;
}

// function to generate markdown for README
function generateMarkdown(data) {

  return`
  # ${data.title}
  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}
  ## Table of Contents:
  ###  * [Description](#description)
  ###  * [License](#license)
  ###  * [Repo](#repo)

  ## Description:
  ### ${data.desription}

  ## Repo:
  ### ${data.repo}
`;
}

module.exports = generateMarkdown;