const axios = require("axios");
require("dotenv").config();

module.exports = {
  gameSearch: function (req, res) {
    console.log(`request made for ${req.params.query}`);
    const data = `search "${req.params.query}"; fields *;where  platforms = (6,49,130,167);`;
    const query = {
      method: "post",
      url: "https://api.igdb.com/v4/games/",
      headers: {
        "Authorization": process.env.IGDB_KEY,
        "Client-ID": process.env.IGDB_CLIENT,
        Accept: "application/json",
        "Content-Type": "text/plain",
        withCredentials: true
      },
      data: data,
    };

    axios(query)
      .then((response) => {
        res.json(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  coverSearch: function (req, res) {
    console.log(`request made for ${req.params.query}`);
    const data = `fields *; where id = ${req.params.query}; `;
    const query = {
      method: "post",
      url: "https://api.igdb.com/v4/covers",
      headers: {
        "Authorization": process.env.IGDB_KEY,
        "Client-ID": process.env.IGDB_CLIENT,
        Accept: "application/json",
        "Content-Type": "text/plain",
        withCredentials: true
      },
      data: data,
    };

    axios(query)
      .then((response) => {
        res.json(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },

};
