import React, { useState } from "react";
import API from "../../utils/API";
import GameCard from "../GameCard";

function AddInventory() {
  const example = [
    {
      title: "The Legend of Zelda: Breath of the Wild",
      consoles: ["6", "130"],
    },
    {
      title: "The Legend of Zelda: The Wind Waker",
      consoles: ["6", "167", "130"],
    },
  ];
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState({});

  function handleInput(event) {
    const { name, value } = event.target;
    setSearch({ [name]: value });
  }

  function handleSearch (event)  {
    event.preventDefault();
    API.searchGames(search.query)
    .then((res) => {
      console.log(res.data);
     setGames(res.data);
      // })
      // .then(setSearch({}))
    });
  };

  return (
    <div className="modal fade" id="add-inventory" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Let's add a new key to your inventory
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
                      <GameCard key={index} title={game.name} consoles={game.platforms} />
                    );
                  })}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddInventory;
