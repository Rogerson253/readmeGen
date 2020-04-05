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

  const api = {
    getUser(username) {
      axios
      .get(`https://api.github.com/users/${username}`, 
      {
          headers: {"Authorization": "token 2fb1a70a518a5da8dec093fd6ac9fda28fc16276"}
      }) 
      .then(response => {
          const avatar = response.data.avatar_url;
         

          const appendReadme = `<img alt="profilePic" src = ${avatar} height="100px" width="100px">`


          fs.appendFile("gen-README.md", appendReadme, function(err) {

            if (err) {
              console.log(err);
            }
            else {
              console.log("Commit logged!");
            }
          
          });
      })
      .catch(error => console.log(error))
    }
  };
  api.getUser("Rogerson253");

  
  
 
  
  
  
  