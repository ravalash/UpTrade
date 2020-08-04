import axios from "axios";

export default {
  searchGames: function (query) {
    // console.log(`query search = ${query}`);
    return axios.get("/api/igdb/gameSearch/" + query);
  },
  checkLogin: function () {
      console.log('check login');
    return axios.get("/api/user");
  },

  addItem: function (game) {
    console.log(game);
    return axios.post("/api/item/", game);
  },
  loadAllItems: function () {
    return axios.get("api/item/");
  },
  searchCover: function (query) {
    return axios.get("/api/igdb/coverSearch/" + query);
  },
  loadUser: function () {
    return axios.get("api/user");
  },

  loadAllListings: function () {
    console.log("load all listings");
    return axios.get("api/listing");
  },
  loadMyListings: function () {
    console.log("load my listings");
    return axios.get("api/listing/user");
  },

  addListing: function (listing) {
    console.log(listing);
    return axios.post("api/listing/", listing);
  },
};

// searchGames: function (query) {
//     return axios({
//         url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games',
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'user-key': process.env.REACT_APP_IGDB_KEY,
//         },
//         data: 'fields name,id; search "' + query + '";'
//     }).then(res => { return res.data })
// }
