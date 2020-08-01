import React from "react";
import ListingItem from "../ListingItem"

function ListingsBox(props) {
    console.log(props.data)
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Listings</h5>
                <div className="search-listings form-group row">
                    <div className="col-6 search-option">
                        <label htmlFor="gameNameSearch">Search by game name</label>
                        <input type="game" className="form-control" id="gameNameSearch" />
                        <button type="submit" className="btn btn-success">Search</button>
                    </div>
                    <div className="col-6 search-option">
                        <div className="platform-filter">
                            <label htmlFor="platform-filter">Filter by platform: </label>
                            <br></br>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="steam-platform-choice" value="option1" />
                                <label className="form-check-label" htmlFor="steam-platform-choice">Steam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="origin-platform-choice" value="option2" />
                                <label className="form-check-label" htmlFor="origin-platform-choice">Origin</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="epic-platform-choice" value="option3" />
                                <label className="form-check-label" htmlFor="epic-platform-choice3">Epic</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="nintendo-platform-choice" value="option1" />
                                <label className="form-check-label" htmlFor="nintendo-platform-choice">Nintendo Switch</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="ps4-platform-choice" value="option2" />
                                <label className="form-check-label" htmlFor="ps4-platform-choice">PlayStation 4</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="xbox-platform-choice" value="option3" />
                                <label className="form-check-label" htmlFor="xbox-platform-choice">Xbox One</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="match-inventory" />
                        <label className="form-check-label" htmlFor="match-inventory">
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