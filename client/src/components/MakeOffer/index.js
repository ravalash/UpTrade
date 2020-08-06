import React, { useState, useContext, useEffect } from "react";
import GameContext from "../../utils/GameContext";
import API from "../../utils/API";
import GameTradeCard from "../GameTradeCard";
const data = require("../../exampleData");

function MakeOffer(props) {
  // these two arrays will be replaced in integration
  // let lookingFor = ["No Man's Sky for PlayStation 4", "Super Mario Odyssey for Nintendo Switch", "Madden 19 for Xbox One", "Kerbal Space Program for Steam"]
  // let myInventory = ["The Legend of Zelda: Breath of the Wild for Nintendo Switch", "Stardew Valley for Steam", "Kerbal Space Program for Steam"]
  const { newOfferGame } = useContext(GameContext);
  const [tradeGames, setTradeGames] = useState([]);
  const [myInventory, setMyInventory] = useState([]);

  useEffect(() => {
    console.log("NewOffer changed");
    console.log(newOfferGame);
    API.loadInfoListing(newOfferGame)
      .then((result) => {
        setTradeGames(result.data);
        API.loadAllItems().then((result) => setMyInventory(result.data));
      })
      .catch((err) => console.log(err));
  }, [newOfferGame]);

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
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>What their looking for:</p>
            <ul>
              {tradeGames.map((item, index) => {
                if (myInventory.includes(item)) {
                  return (
                    <li className="match-item" key={index}>
                      {item.title} on {item.platform} <i>You have this item!</i>
                    </li>
                  );
                } else
                  return (
                    <li key={index}>
                      {item.title} on {item.platform}{" "}
                    </li>
                  );
              })}
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
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
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
