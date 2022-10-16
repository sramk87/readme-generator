// packages needed
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for your project?',
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            }
            else {
                console.log('Please give your project a title.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description:',
        validate: projectDes => {
            if (projectDes) {
                return true;
            }
            else {
                console.log('Please provide a description of your project.')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['MIT', 'Apache 2.0', 'ISC', 'None'],
        validate: projectLicense = () => {
            if (projectLicense) {
            return true;
            }
            else {
                console.log('Please make a selection.')
                return false;
            }
        }
    },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the GitHub repo for your project?',
            validate: projectRepo => {
                if (projectRepo) {
                    return true;
                }
                else {
                    console.log('Please enter the URL to your project repo.')
                    return false;
                }
            }
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();