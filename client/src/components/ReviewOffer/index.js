import React, { useState, useContext, useEffect } from "react";
import GameContext from "../../utils/GameContext";
import OfferCard from "../OfferCard";
import API from "../../utils/API";
const data = require("../../exampleData");

function ReviewOffer(props) {
  const { reviewOfferListing } = useContext(GameContext);
  const [newOffers, setNewOffers] = useState([]);
  // const [myInventory, setMyInventory] = useState([]);

  useEffect(() => {
    console.log("ReviewOffer Useeffect");
    console.log(reviewOfferListing);
    API.reviewOffer(reviewOfferListing).then((res) => {setNewOffers(res.data)});
    // API.loadInfoListing(newOfferGame)
    //   .then((result) => {
    //     setTradeGames(result.data);
    //     API.loadAllItems().then((result) => setMyInventory(result.data));
    //   })
    //   .catch((err) => console.log(err));
  }, [reviewOfferListing]);

  return (
    <div className="modal fade" id="review-offer" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              You've got offers!
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <OfferCard data={newOffers}/>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReviewOffer;
