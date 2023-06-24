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

    {
        type: 'input',
        name: 'email',
        message: "What's your email?"
    },

    {
        type: 'input',
        name: 'title',
        message: "What's the name of your project?"
    },

    {
        type: 'input',
        name: 'description',
        message: "Please provide a brief description of your project?"
    },

    {
        type: 'list',
        name: 'license',
        message: "Choose the appropriate license for your application",
        choices: ["Apache 2.0", "MIT License", "GNU GPLv3"]
    },

    {
        type: 'input',
        name: 'dependencies',
        message: "What dependencies need to be install prior to running?",
        default: 'npm i'
    },

    {
        type: 'input',
        name: 'test',
        message: "What command do you enter to run the test?",
        default: 'npm test'
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
