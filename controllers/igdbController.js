const axios = require("axios");
require("dotenv").config();

module.exports = {
  gameSearch: function (req, res) {
    console.log(`request made for ${req.params.query}`);
    const data = `search "${req.params.query}"; fields *;`;
    const query = {
      method: "post",
      url: "https://api-v3.igdb.com/games",
      headers: {
        "user-key": process.env.IGDB_KEY,
        Accept: "application/json",
        "Content-Type": "text/plain",
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
