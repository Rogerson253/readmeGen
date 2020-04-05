require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

const api = {
  getUser(username) {
    axios
    .get(`https://api.github.com/users/${username}`) 
    // {
    //     headers: {"Authorization": `token ${process.env.GH_TOKEN}`}
    // }) 
    .then(response => {
      const avatar = response.data.avatar_url

      const readMe = `![profilepic](${avatar})`

      fs.writeFile("gen-README.md", readMe, function(err) {
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

api.getUser("Rogerson253");

