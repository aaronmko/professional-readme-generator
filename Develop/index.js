// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const path = require('path');

const generateMarkdown = require('./assets/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'github',
        message: "What's your GitHub account username?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
