import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import UserCard from "../components/UserCard";
import MyListingsBox from "../components/MyListingsBox";
import API from "../utils/API";
// const data = require("../exampleData");

function Listings() {
  const [savedListings, setSavedListings] = useState([]);

  useEffect(() => {
    console.log("listing use effect");
    API.loadMyListings()
      .then((res) => {
        console.log(res);
        setSavedListings(res.data);
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
          <hr></hr>
          <div className="card">
            <Link to="/listings">
              <div className="card-body">
                <h5 className="card-title show-my-listings">
                  Show all listings
                </h5>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-9" id="new-listings-col">
        <MyListingsBox data={savedListings} />
      </div>
    </div>
  );
}

export default Listings;
