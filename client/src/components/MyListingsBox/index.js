import React, { useState } from "react";
import MyListingItem from "../MyListingItem";
import MyofferItem from "../MyOfferItem"
require("./styles.css");

function MyListingsBox(props) {
  const [listingsTab, setListingsTab] = useState(1);

  function setTab(event) {
    event.preventDefault();
    console.log(event.target);
    setListingsTab(parseInt(event.target.getAttribute("data-id")))
  }
  return (
    <div className="card">
      <div className="card-body" style={{backgroundColor:"#342E37"}}>
        <button
          type="button"
          data-id={1}
          className="link-button"
          onClick={setTab}
        >
          <h5 className={listingsTab===1 ? "card-title" : "card-title text-light"} data-id={1}>
            My Listings
          </h5>
        </button>

        <button
          type="button"
          data-id={2}
          className="link-button"
          onClick={setTab}
          style={{float: "right"}}
        >
          <h5 className={listingsTab===2 ? "card-title" : "card-title text-light"} data-id={2}>
            My Offers
          </h5>
        </button>

        <hr />
        <div className="container" style={listingsTab ===1 ? {display:'block'} : {display: 'none'}}>
          <MyListingItem data={props.data} reviewOffer={props.reviewOffer}/>
        </div>
        <div className="container" style={listingsTab ===2 ? {display:'block'} : {display: 'none'}}>
        <MyofferItem bids={props.bids}/>
        </div>
      </div>
    </div>
  );
}

// search fields:
// name
// filter:
// platform
// matches game in inventory
export default MyListingsBox;
