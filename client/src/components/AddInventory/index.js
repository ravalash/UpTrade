import React, { useState } from "react";
import API from "../../utils/API";
import GameCard from "../GameCard";

function AddInventory() {
    const example = [{
        title: "The Legend of Zelda: Breath of the Wild",
        consoles: ["6", "130"]
    },
    {
        title: "The Legend of Zelda: The Wind Waker",
        consoles: ["6", "167", "130"]
    }]
    const [games, setGames] = useState([])
    const [search, setSearch] = useState({})

    function handleInput(event) {
        const { name, value } = event.target;
        setSearch({ [name]: value })
    };

    function handleSearch(event) {
        event.preventDefault();
        // API.searchGames(search.query)
        //     .then(res => {
        //         console.log(res.data)
        setGames(example)
        // })
        // .then(setSearch({}))
    }

    return (
        <div class="modal fade" id="add-inventory" tabIndex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Let's add a new key to your inventory</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div className="form-group">
                                <input className="form-control" name="query" placeholder="Search games" onChange={handleInput} />
                            </div>
                            <button type="button" class="btn btn-success" onClick={handleSearch}>Search for a game </button>
                        </form>
                        <br />
                        <div className="row mx-auto">
                            {games.length ? (
                                <div>
                                    {games.map(game => {
                                        return (
                                            <GameCard
                                                title={game.title}
                                                consoles={game.consoles}
                                            />
                                        )
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
    )
}
export default AddInventory