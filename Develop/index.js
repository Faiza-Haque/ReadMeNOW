// TODO: Include packages needed for this application
const thereadme = require('thereadme');
thereadme.get('./enigma/README.md')

    .then(response => {
    console.log('question:', response.questions);
});

// TODO: Create an array of questions for user input
const questions = [
    "What was your motivation?",
    "Why did you build this project?",
    "What problem does it solve?",
    "What did you learn?",
    "What makes your project stand out?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    this.questions.pop();
}

// TODO: Create a function to initialize app
function init() {
    console.log('initialize app')
}


// Function call to initialize app
init();
