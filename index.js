// require("dotenv").config();
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your github username?",
      name: "username"
    },
    {
      type: "input",
      message: "What is the name of your project?",
      name: "project"
    },
    {
      type: "input",
      message: "Describe your project.",
      name: "description"
    },
    {
      type: "checkbox",
      message: "What type of license?",
      name: "license",
      choices: [
        "Eclipse", 
        "MIT", 
        "Apache", 
        "Mozilla"
      ]
    },
  ])
  .then(function(response) {
    const username = response.username;
    const projectName = response.project;
    const description = response.description;
    const license = response.license;


    const readMe = `# ${projectName}
  ## Description
  * ${description}

  ## Table of Contents

  ## Installation

  ## Usage

  ## Tests
  
  ## Technologies
  * Node.js, Axios, Inquirer

  ## Contributors
  @${username}
  
  ## Contact
  
  #### Rogerson Jean-Charles (@rogerson253)
  * Email: [rogerson253@gmail.com](rogerson253@gmail.com)
  * LinkedIn: https://www.linkedin.com/in/rogerson-jean-charles253/
  
  ## License
  ${license}`

   
   
    fs.writeFile("gen-README.md", readMe, function(err) {
        if (err) {
            return console.log(err);
          }
        
          console.log("Success!");
        
    })
  });



  
  
 
  
  
  
  