import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import ListingsBox from "../components/ListingsBox";
import { Link } from "react-router-dom";
import API from '../utils/API';

function Listings(props) {
  const [allListings, setAllListings] = useState([]);
  

  useEffect(() => {
    console.log("listing use effect");
    API.loadAllSeller()
      .then((res) => {
        // console.log(res);
        setAllListings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    //   if(redirectListing===1) {
    //       console.log('redirect from listings')
    //     return <Redirect to="/"/>;
    //   }

    return (
        <div className="container" id="dashboard-container">
            <div className="row">
                <div className="col-3" id="user-col">
                    <UserCard />
                    <hr></hr>
                    <div className="card" >
                        <Link to="/mylistings"><div className="card-body">
                            <h5 className="card-title show-my-listings">Show my listings</h5>
                        </div></Link>
                    </div>
                </div>
                <div className="col-9" id="new-listings-col">
                    <ListingsBox data={allListings} newOffer={props.newOffer} />
                </div>
            </div>
        </div>
    );
}

export default Listings;
