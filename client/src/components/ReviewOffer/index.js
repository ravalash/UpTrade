import React, { useState, useContext, useEffect } from "react";
import GameContext from "../../utils/GameContext";
import OfferCard from "../OfferCard";
import API from "../../utils/API";
import { NotificationManager } from "react-notifications"

function ReviewOffer(props) {
  const { reviewOfferListing } = useContext(GameContext);
  const [newOffers, setNewOffers] = useState([]);

  useEffect(() => {
    console.log("ReviewOffer Useeffect");
    console.log(reviewOfferListing);
    if (reviewOfferListing !== "") {
      API.reviewOffer(reviewOfferListing).then((res) => {
        setNewOffers(res.data);
      });
    }
  }, [reviewOfferListing]);

  function rejectOffer(event) {
    const transactionID = parseInt(event.target.getAttribute("data-id"));
    API.rejectOffer(transactionID)
      .then((res) => {
        console.log(res);
        let newOffersHolder = newOffers.filter(
          (item) => item.id !== transactionID
        );
        setNewOffers(newOffersHolder);
        NotificationManager.warning('Offer declined')
        console.log(newOffers);
        if (newOffersHolder.length === 0) {
          API.updateSellerListing(reviewOfferListing);
        }
      })
      .catch((err) => console.log(err));
  }

  function acceptOffer(event) {
    const transactionID = parseInt(event.target.getAttribute("data-id"));
    console.log(transactionID);
    API.acceptOffer(transactionID).then((result) => {
      console.log(result)
      NotificationManager.success('Trade complete!')
    })
  }

  // API.rejectOffer(transactionID)
  //   .then((res) => {
  //     console.log(res);
  //     let newOffersHolder = newOffers.filter(
  //       (item) => item.id !== transactionID
  //     );
  //     setNewOffers(newOffersHolder);
  //     console.log(newOffers);
  //     if (newOffersHolder.length === 0) {
  //       API.updateSellerListing(reviewOfferListing);
  //     }
  //   })
  //   .catch((err) => console.log(err));

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
            <OfferCard
              data={newOffers}
              rejectOffer={rejectOffer}
              acceptOffer={acceptOffer}
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReviewOffer;
