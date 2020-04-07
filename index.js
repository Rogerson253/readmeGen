// require("dotenv").config();
const axios = require("axios");
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
  <img src="https://img.shields.io/badge/License-MIT-blue">
  <hr>
  
  ## Description
  * ${description}

  ## Table of Contents

  ## Installation

  ## Usage

  ## Tests

  ## Contributors
  @${username}
  
  ## License
  ${license}
  <hr>
  
  `

   
   
    fs.writeFile("gen-README.md", readMe, function(err) {
        if (err) {
            return console.log(err);
          }
        
          console.log("Success!");
        
    })

    const api = {
      getUser(username) {
        axios
        .get(`https://api.github.com/users/${username}`) 
        // {
        //     headers: {"Authorization": `token ${process.env.GH_TOKEN}`}
        // }) 
        .then(response => {
          const avatar = response.data.avatar_url
    
          const readMeTwo = `<img align="left" src="${avatar}" height="100" width="100">`
    
          fs.appendFile("gen-README.md", '\n' + readMeTwo, function(err) {
            if (err) {
                return console.log(err);
              }
            
              console.log("Success!");
            
        })
            // console.log(response.data.avatar_url);
            // console.log(response.data.email);
        })
        .catch(error => console.log(error))
      }
    };

    api.getUser(username);
  });



  
  
 
  
  
  
  