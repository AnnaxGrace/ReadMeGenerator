var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the Title?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a short description of your project."
    },
    {  
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should we use?",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]

    },
    {
        type: "input",
        name: "contributers",
        message: "Are contributers allowed? Include any rules for contribution."
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be used to run tests?"
    },
    {
        type: "input",
        name: "gitHubUsername",
        message: "What is your gitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "link",
        message: "What is the URL to your project?"
    },
    {
        type: "input",
        name: "photo",
        message: "What is the URL to your gitHub Profile picture?"
    },
    

]).then(function(data) { 

    var filename = data.title + "readme.md";
    fs.writeFile(filename,`
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
### Installation
${data.installation}
### License
${data.license}
### Contributing
${data.contributers}
### Tests
${data.tests}
### Questions
* Github username: ${data.gitHubUsername}
* Email: ${data.email}
* Deployed Project URL: ${data.link}

<img src="${data.photo}"
     alt="Contributer Photo"
     style="float: left; margin-right: 10px;" />
    `, function(error) {
    if (error) {
        return console.log(error);
    }

    console.log("Success!");

    });

});


