const axios = require('axios');

module.exports = {
  async searchUser(username) {
    const response = await  axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  }
};