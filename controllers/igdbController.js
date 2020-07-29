const axios = require("axios")

module.exports = {
    gameSearch: function (req, res) {
        axios({
            url: 'https://api-v3.igdb.com/games',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': '9e51460fd6a9b44afb7a422427da23a2',
            },
            data: 'fields name,id; search "' + req.params.query + '";'
        }).then(response => console.log(response))
    }
}