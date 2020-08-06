import React, { useState, useContext, useEffect } from "react";
import GameContext from "../../utils/GameContext";
import API from "../../utils/API";
import { NotificationManager } from "react-notifications";

function MakeOffer(props) {

  const { newOfferGame } = useContext(GameContext);
  const [tradeGames, setTradeGames] = useState([]);
  const [myInventory, setMyInventory] = useState([]);

  function resetState() {
    setTradeGames([]);
    setMyInventory([]);
  }

  useEffect(() => {
    console.log("NewOffer changed");
    console.log(newOfferGame);
    if (newOfferGame !== "") {
      API.loadInfoListing(newOfferGame)
        .then((result) => {
          setTradeGames(result.data);
          API.loadAllItems().then((result) => setMyInventory(result.data));
        })
        .catch((err) => console.log(err));
    }
  }, [newOfferGame]);

  useEffect(() => {
    console.log("TradeGames changed");
    console.log(tradeGames);
  }, [tradeGames]);

  function createOffer(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(
      document
        .querySelector("input[name=offerChoice]:checked")
        .getAttribute("id")
    );
    console.log(
      document
        .querySelector("input[name=offerChoice]:checked")
        .getAttribute("data-name")
    );
    const offer = {
      offeredItemId: document
        .querySelector("input[name=offerChoice]:checked")
        .getAttribute("id"),
      ListingId: newOfferGame,
    };
    console.log(offer);
    API.newOffer(offer)
      .then((result) => {
        console.log(result);
        resetState();
        NotificationManager.success("Offer sent!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="modal fade" id="make-offer" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Let's make an offer
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={resetState}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>What their looking for:</p>
            <ul>
              {tradeGames.length ? (
                tradeGames.map((item, index) => {
                  if (myInventory.includes(item)) {
                    return (
                      <li className="match-item" key={index}>
                        {item.title} on {item.platform}{" "}
                        <i>You have this item!</i>
                      </li>
                    );
                  } else
                    return (
                      <li key={index}>
                        {item.title} on {item.platform}{" "}
                      </li>
                    );
                })
              ) : (
                <li />
              )}
            </ul>
            <hr />
            <p>What would you like to offer?</p>
            {/* replace item with props.name when integrated */}
            {myInventory.map((item) => {
              return (
                <div className="form-check" key={item.id}>
                  <input
                    className="form-check-input"
                    type="radio"
                    id={item.id}
                    data-name={item.name}
                    name="offerChoice"
                  ></input>
                  <label className="form-check-label" for={item.name}>
                    {item.name}
                  </label>
                </div>
              );
            })}

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={resetState}
              >
                Close
              </button>

              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={createOffer}
              >
                Make Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MakeOffer;
