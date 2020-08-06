import React, { useState, useEffect } from "react";
import ListingItem from "../ListingItem"

function ListingsBox(props) {
    const [listings, setListings] = useState(props.data);

    function handleTitleAZ() {
        setListings(props.data
            .sort(function (a, b) {
                if (a.Item.name.toLowerCase() < b.Item.name.toLowerCase()) return -1;
                if (a.Item.name.toLowerCase() > b.Item.name.toLowerCase()) return 1;
                return 0
            }))
    }

    function handleTitleZA() {
        setListings(props.data
            .sort(function (a, b) {
                if (a.Item.name.toLowerCase() < b.Item.name.toLowerCase()) return 1;
                if (a.Item.name.toLowerCase() > b.Item.name.toLowerCase()) return -1;
                return 0
            }))
    }

    var steam = props.data.filter(e => e.Item.platform === "Steam")
    var epic = props.data.filter(e => e.Item.platform === "Epic")
    var origin = props.data.filter(e => e.Item.platform === "Origin")
    var ninty = props.data.filter(e => e.Item.platform === "Nintendo Switch")
    var ps4 = props.data.filter(e => e.Item.platform === "PlayStation 4")
    var xbox = props.data.filter(e => e.Item.platform === "Xbox One")

    function showSteam() {
        setListings(steam)
    }

    function showEpic() {
        setListings(epic)
    }

    function showOrigin() {
        setListings(origin)
    }

    function showNinty() {
        setListings(ninty)
    }

    function showps4() {
        setListings(ps4)
    }

    function showXbox() {
        setListings(xbox)
    }

    function showAll() {
        setListings(props.data)
        console.log("set")
    }

    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Listings</h5>
                <div className="search-listings form-group row">
                    {/* <div className="col-6 search-option">
                        <label for="gameNameSearch">Search by game name</label>
                        <input type="game" className="form-control" id="gameNameSearch" onClick={handleInput} />
                        <button type="submit" className="btn btn-dark" onClick={searchByName}>Search</button>
                    </div> */}
                    <div className="col-6 search-option">
                        <div className="platform-filter">
                            <label htmlFor="platform-filter">Filter by platform: </label>
                            <br></br>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="platform-filter" id="steam-platform-choice" value="option1" onClick={showSteam} />
                                <label className="form-check-label" htmlFor="steam-platform-choice">Steam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="platform-filter" id="origin-platform-choice" value="option2" onClick={showOrigin} />
                                <label className="form-check-label" htmlFor="origin-platform-choice">Origin</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="platform-filter" id="epic-platform-choice" value="option3" onClick={showEpic} />
                                <label className="form-check-label" htmlFor="epic-platform-choice3">Epic</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="platform-filter" id="nintendo-platform-choice" value="option1" onClick={showNinty} />
                                <label className="form-check-label" htmlFor="nintendo-platform-choice">Nintendo Switch</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="platform-filter" id="ps4-platform-choice" value="option2" onClick={showps4} />
                                <label className="form-check-label" htmlFor="ps4-platform-choice">PlayStation 4</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="platform-filter" id="xbox-platform-choice" value="option3" onClick={showXbox} />
                                <label className="form-check-label" htmlFor="xbox-platform-choice">Xbox One</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="platform-filter" id="show-all" value="option3" onClick={showAll} />
                                <label className="form-check-label" htmlFor="xbox-platform-choice">Show All</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 sort-by">
                        <div className="sort-by-toggle">
                            <label for="sort-by-toggle">Sort by:</label>
                            <br></br>

                            <button className='btn btn-sm btn-dark' onClick={handleTitleAZ}>&#x2191;</button>
                            <button className='btn btn-sm btn-dark' onClick={handleTitleZA}>&#x2193;</button>
                            <br></br>Alphabetical

                                {/* <div className="col-6 sort-by">
                                    <button className='btn btn-sm btn-dark'>&#x2191;</button>
                                    <button className='btn btn-sm btn-dark'>&#x2193;</button>
                                    <br></br>Date posted
                            </div> */}
                        </div>
                    </div>

                </div>
                <hr />
                <div className="container">
                    <ListingItem data={listings} newOffer={props.newOffer} />
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