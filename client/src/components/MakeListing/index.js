import React, { useState, useContext } from "react";
import API from "../../utils/API";
import GameTradeCard from "../GameTradeCard";
import GameContext from "../../utils/GameContext";

function MakeListing(props) {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [listing, setListing] = useState([]);
  const { selectedListingGame } = useContext(GameContext);

  function handleInput(event) {
    const { name, value } = event.target;
    setSearch({ [name]: value });
  }

  function handleSearch(event) {
    event.preventDefault();
    API.searchGames(search.query).then((res) => {
      setGames(res.data);
    });
  }

  const submitLiting = () => {
    const newListing = {
      active: 1,
      offer: 0,
      barter: 1,
      verified: 0,
      request: JSON.stringify(listing),
      ItemId: selectedListingGame,
    };
    API.addListing(newListing)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleAddToListing = (e) => {
    e.preventDefault();
    let item = {
      title: e.target.getAttribute("data-title"),
      platform:
        e.target.parentElement.parentElement.firstElementChild.children[2]
          .firstElementChild.value,
    };
    let listingHolder = listing;
    listingHolder.push(item);
    setListing(listingHolder);
    let id = e.target.getAttribute("id");
    document.getElementById(id).innerHTML = "Game Added";
    document.getElementById(id).className = "btn btn-warning";
  };

  return (
    <div className="modal fade" id="make-listing" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Let's list your game for trade
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
            <p>What game would you want to get for {props.name}?</p>
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  name="query"
                  placeholder="Search games"
                  onChange={handleInput}
                />
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleSearch}
              >
                Search for a game{" "}
              </button>
            </form>
            <br />
            <div className="row mx-auto">
              {games.length ? (
                <div>
                  {games.map((game, index) => {
                    return (
                      <GameTradeCard
                        key={index}
                        id={game.id}
                        title={game.name}
                        consoles={game.platforms}
                        onClick={handleAddToListing}
                      />
                    );
                  })}
                </div>
              ) : (
                <></>
              )}
            </div>
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
                onClick={submitLiting}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MakeListing;
