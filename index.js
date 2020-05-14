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
        message: "Please list contributers to the project"
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
###Usage
###License
${data.license}
###Contributing
${data.contributers}
###Tests
${data.tests}
###Questions
Github username: ${data.gitHubUsername}
Email: ${data.email}
Project URL: ${data.link}
Profile Picture: 
![Image of contributer] (${data.photo})

    `, function(error) {
    if (error) {
        return console.log(error);
    }

    console.log("Success!");

    });

});


