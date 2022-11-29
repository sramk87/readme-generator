// packages needed
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

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

// function to write README file
const writeToFile = fileData => {
    return new Promise((resolve, reject) => {
        fs.writeToFile('./README.md', fileData, err => {
            if (err) {
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: console.log('Your README has been successfully created!')
            });
        });
    });
};

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });
}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(dataContent => {
    return writeToFile(dataContent);
})
.catch(err => {
    console.log(err);
})

module.exports = questions;