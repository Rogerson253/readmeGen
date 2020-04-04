var inquirer = require("inquirer");
var fs = require("fs");

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
  ])
  .then(function(response) {
    const username = response.username;
    const projectName = response.project;
    const description = response.description;

    const readMe = `# ${projectName}
  
  ## Contributors
  @${username}
  
  ## Description
  * ${description}.
  
  ## Technologies
  * Node.js, Axios, Inquirery
  
  ## Contact
  
  #### Rogerson Jean-Charles (@rogerson253)
  * Email: [rogerson253@gmail.com](rogerson253@gmail.com)
  * LinkedIn: https://www.linkedin.com/in/rogerson-jean-charles253/
  
  ## License
  MIT`

   
   
    fs.writeFile("gen-README.md", readMe, function(err) {
        if (err) {
            return console.log(err);
          }
        
          console.log("Success!");
        
    })
  });
