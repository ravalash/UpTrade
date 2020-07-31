import React, { useState, useEffect, useRef } from "react";
import API from "../../utils/API";
import GameCard from "../GameCard";
import Alert from "../Alert";

function AddInventory() {
  const didMountRef = useRef(false);
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState({});
  const [noresults, setNoResults] = useState(null);
  function handleInput(event) {
    const { name, value } = event.target;
    setSearch({ [name]: value });
  }

  //   useEffect(() => {

  //     setTimeout(() => setNoResults(null), 5000);
  //   }, []);

  useEffect(() => {
    if (didMountRef.current) {
      setTimeout(() => setNoResults(null), 5000);
    } else didMountRef.current = true;
  });

  function handleSearch(event) {
    event.preventDefault();
    API.searchGames(search.query).then((res) => {
      console.log(res.data);
      const includedPlatforms = [6,49,130,167];
      const platformGames = res.data.filter(function (game) {
       let pass = false; 
       game.platforms.forEach(element => {
        
        if  (includedPlatforms.includes(element)){
          console.log(element);
          pass= true;
        }

       });
       return pass;
      });
      console.log(platformGames);

      setGames(platformGames);
      if (platformGames.length === 0) {
        setNoResults(true);
      }
      // })
      // .then(setSearch({}))
    });
  }

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
              <Alert style={{ opacity: noresults ? 1 : 0 }} type="danger">
                No Results Found
              </Alert>
            </form>
            <br />
            <div className="row mx-auto">
              {games.length ? (
                <div>
                  {games.map((game, index) => {
                    return (
                      <GameCard
                        key={index}
                        title={game.name}
                        consoles={game.platforms}
                        cover={game.cover}
                        url={game.url}
                        storyline={typeof game.storyline !== 'undefined' ? game.storyline : game.summary}

                      />
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
