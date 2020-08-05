import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import ListingsBox from "../components/ListingsBox";
import API from "../utils/API";

function Listings(props) {
  const [allListings, setAllListings] = useState([]);
  

  useEffect(() => {
    console.log("listing use effect");
    API.loadAllListings()
      .then((res) => {
        // console.log(res);
        setAllListings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <div className="container" id="dashboard-container">
      <div className="row">
        <div className="col-3" id="user-col">
          <UserCard />
        </div>
        <div className="col-9" id="new-listings-col">
          <ListingsBox data={allListings} newOffer={props.newOffer}  />
        </div>
      </div>
    </div>
  );
}

export default Listings;
