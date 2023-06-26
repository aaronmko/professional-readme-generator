// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-MIT-yellowgreen.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === 'GPL v3') {
    return `[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license === 'Apache 2.0') {
    return `[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description 

  ${data.description}

  ## Table of Contents 

  * [Installations](#installations)

  * [Usage](#usage)
  
  * [Contributors](#contributors)

  * [Test](#tests)

  * [Questions](#questions)

  ${renderLicenseLink(data.license)}
  
  ## Installations

  To install dependencies, run these commands:

  \`\`\`
  ${data.dependencies}
  \`\`\`

  ## Contributors

  ${data.contributors}

  ## Tests

  To run tests, run these commands:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  For additional questions, please contact me at my email or visit my GitHub page.

  - GitHub: [${data.github}](https://github.com/${data.github}/)
  - Email:  ${data.email}
  `;
}


module.exports = generateMarkdown;
