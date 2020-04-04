var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
  ])
  .then(function(response) {
    

   
   
    fs.writeFile("RMLN.html", ourFile, function(err) {
        if (err) {
            return console.log(err);
          }
        
          console.log("Success!");
        
    })
  });
