// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe your project?",
        name: "description",
    },
    {
        type: "input",
        message: "Table of Contents ",
        name: "table of contents",
    },
    {
        type: "input",
        message: "How do you install you project!",
        name: "installation",
    },
    {
        type: "list",
        message: "What type of license does your project use?",
        choices: ["MIT","GPLv3", "GPL"],
        name: "license",
    },
    {
        type: "input",
        message: "Credits",
        name: "contributing",
    },

    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, error => {
            if (error) {
                reject(error);
                return;
            }
            resolve({
                ok: true,
                message: 'README File Generated!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            return generateMarkdown(answers);
        })
        .then(pageMarkdown => {
            writeToFile('README.md', pageMarkdown);
            console.log('README.md made');
        })
        .catch((error) => {
            console.log(error);
        });
}


// Function call to initialize app
init();
