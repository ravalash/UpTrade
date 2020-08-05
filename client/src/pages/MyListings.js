import React, { useEffect, useState } from "react";
// import { Redirect } from "react-router-dom";
import UserCard from "../components/UserCard";
import MyListingsBox from "../components/MyListingsBox";
import API from "../utils/API";
const data = require("../exampleData");

function Listings() {
  const [savedListings, setSavedListings] = useState([]);
//   const [redirectMyListing, setRedirectMyListing] = useState(0);

  useEffect(() => {
    console.log("listing use effect");
    API.loadMyListings()
      .then((res) => {
        console.log(res);
        setSavedListings(res.data);
      })
      .catch((err) => {
        console.log(err);
        // setRedirectMyListing(1);
      });
  }, []);

//   if (redirectMyListing === 1) {
//     console.log("redirect from my listings");
//     return <Redirect to="/" />;
//   }

  return (
    <div className="container" id="dashboard-container">
      <div className="row">
        <div className="col-3" id="user-col">
          <UserCard />
        </div>
        <div className="col-9" id="new-listings-col">
          <MyListingsBox data={data} />
        </div>
      </div>
    </div>
  );
}

export default Listings;
