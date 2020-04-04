const axios = require("axios");
const api = {
  getUser(username) {
    axios
    .get(`https://api.github.com/users/${username}`, 
    {
        headers: {"Authorization": "token 729e00978cfc5dc147802e7c60be193eba9122b1"}
    }) 
    .then(response => {
        console.log(response.data.avatar_url);
        console.log(response.data.email);
    })
    .catch(error => console.log(error))
  }
};

api.getUser("Rogerson253");