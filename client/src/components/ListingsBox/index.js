import React from "react";
import ListingItem from "../ListingItem"

function ListingsBox(props) {

    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Listings</h5>
                <div className="search-listings form-group row">
                    <div className="col-6 search-option">
                        <label for="gameNameSearch">Search by game name</label>
                        <input type="game" class="form-control" id="gameNameSearch" />
                        <button type="submit" class="btn btn-dark">Search</button>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="match-inventory" />
                            <label class="form-check-label" for="match-inventory">
                                Show only listings that match my inventory
                            </label>
                        </div>

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
                            <div className="form-check form-check-inline">
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
                            <hr></hr>
                        </div>
                        <div className="sort-by-toggle">
                            <label for="sort-by-toggle">Sort by:</label>
                            <br></br>
                            <div className="row">
                                <div className="col-6 sort-by">
                                    <button className='btn btn-sm btn-dark'>&#x2191;</button>
                                    <button className='btn btn-sm btn-dark'>&#x2193;</button>
                                    <br></br>Alphabetical
                            </div>
                                <div className="col-6 sort-by">
                                    <button className='btn btn-sm btn-dark'>&#x2191;</button>
                                    <button className='btn btn-sm btn-dark'>&#x2193;</button>
                                    <br></br>Date posted
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <ListingItem data={props.data} />
                </div>
            </div>
        </div >
    )
}

// search fields:
// name
// filter:
// platform
// matches game in inventory
export default ListingsBox