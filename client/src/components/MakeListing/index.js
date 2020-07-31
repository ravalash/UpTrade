import React, { useState } from "react";
import API from "../../utils/API";
import GameTradeCard from "../GameTradeCard"
const data = require("../../exampleData");

function MakeListing(props) {
    const [games, setGames] = useState([]);
    const [search, setSearch] = useState({});
    const ListedGames = [""]

    function handleInput(event) {
        const { name, value } = event.target;
        setSearch({ [name]: value });
    }

    function handleSearch(event) {
        event.preventDefault();
        API.searchGames(search.query)
            .then((res) => {
                console.log(res.data);
                setGames(res.data);
            });
    };

    return (

        <div className="modal fade" id="make-listing" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Let's list your game for trade</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>What game would you want to get for {props.title}?</p>
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
                                            <GameTradeCard key={index} title={game.name} consoles={game.platforms} />
                                        );
                                    })}
                                </div>
                            ) : (
                                    <></>
                                )}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default MakeListing