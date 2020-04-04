var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your github username?",
      name: "username"
    },
  ])
  .then(function(response) {
    const username = response.username;

    const readMe = `## Contributors
  @${username}`

   
   
    fs.writeFile("gen-README.md", readMe, function(err) {
        if (err) {
            return console.log(err);
          }
        
          console.log("Success!");
        
    })
  });
