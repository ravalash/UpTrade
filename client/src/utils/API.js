import axios from "axios";

export default {
  searchGames: function (query) {
    // console.log(`query search = ${query}`);
    return axios.get("/api/igdb/gameSearch/" + query);
  },
  checkLogin: function () {
    console.log("check login");
    return axios.get("/api/user");
  },
  logout: function () {
    console.log("api logout");
    return axios.get("api/user/logout");
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
  loadOneListing: function (id) {
    console.log(`load detasils for listing ${id}`);
    return axios.get(`api/listing/byid/${id}`);
  },
  loadInfoListing: function (id) {
    console.log(`load non secure information for listing ${id}`);
    return axios.get(`api/listing/info/${id}`);
  },
  loadAllSeller: function () {
    console.log(`load all listings from other users`);
    return axios.get(`api/listing/seller`);
  },

  addListing: function (listing) {
    console.log(listing);
    return axios.post("api/listing/", listing);
  },

  updateSellerListing: function (id) {
    console.log(`updating listing with id ${id}`);
    const query = { status: 0 };
    return axios.put(`api/listing/seller/${id}`, query);
  },
  newOffer: function (offer) {
    console.log(offer);
    return axios.post("api/transaction", offer);
  },
  //Loads all open offers for a listing by ID number
  reviewOffer: function (id) {
    console.log(`Loading all offers for listing ${id}`);
    return axios.get(`api/transaction/offers/${id}`);
  },
  
  acceptOffer: function (id) {
    console.log(`Accepting offer for transaction ${id}`);
    return axios.put(`api/transaction/offers/${id}`);

  },

  rejectOffer: function (id) {
    const query = { status: 1 };
    console.log(`rejecting offer ${id}`);
    return axios.put(`api/transaction/seller/${id}`, query);
  },
  loadAllBids: function () {
    console.log(
      "load all transactions where user has made an offer and the listing is active"
    );
    return axios.get("api/transaction/bids");
  },
};
