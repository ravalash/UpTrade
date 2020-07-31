import React from "react";
import ListingItem from "../ListingItem"

function ListingsBox(props) {
    console.log(props.data)
    return (
        <div className="card" >
            <div className="card-body">
                <h5 class="card-title">Listings</h5>
                <div className="search-listings form-group row">
                    <div className="col-6 search-option">
                        <label for="gameNameSearch">Search by game name</label>
                        <input type="game" class="form-control" id="gameNameSearch" />
                        <button type="submit" class="btn btn-success">Search</button>
                    </div>
                    <div className="col-6 search-option">
                        <div className="platform-filter">
                            <label for="platform-filter">Filter by platform: </label>
                            <br></br>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="steam-platform-choice" value="option1" />
                                <label class="form-check-label" for="steam-platform-choice">Steam</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="origin-platform-choice" value="option2" />
                                <label class="form-check-label" for="origin-platform-choice">Origin</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="epic-platform-choice" value="option3" />
                                <label class="form-check-label" for="epic-platform-choice3">Epic</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="nintendo-platform-choice" value="option1" />
                                <label class="form-check-label" for="nintendo-platform-choice">Nintendo Switch</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="ps4-platform-choice" value="option2" />
                                <label class="form-check-label" for="ps4-platform-choice">PlayStation 4</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="xbox-platform-choice" value="option3" />
                                <label class="form-check-label" for="xbox-platform-choice">Xbox One</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="match-inventory" />
                        <label class="form-check-label" for="match-inventory">
                            Show only listings that match my inventory
                            </label>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <ListingItem data={props.data} />
                </div>
            </div>
        </div>
    )
}

// search fields:
// name
// filter:
// platform
// matches game in inventory
export default ListingsBox