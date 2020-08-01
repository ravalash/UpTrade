import React from "react"

function OfferCard() {
    return (
        <div>
            <div className="card" id="listing-item">
                <div className="card-body" id="listing-item">
                    <h5 className="card-title">Civilization VI</h5>
                    <div className="row">
                        <div className="col-4">
                            <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co28j8.jpg"></img>
                        </div>
                        <div className="col-8">
                            <p><span className="badge badge-pill badge-dark">Steam</span> <span className="badge badge-pill badge-primary">From user GameDude420</span></p>
                            <p>Civilization is a turn-based strategy game in which you attempt to build an empire to stand the test of time.<a target="_blank" href="https://www.igdb.com/games/sid-meiers-civilization-vi"> Read more...</a></p>
                            <button type="button" className="btn btn-success">Accept Offer</button>
                            <button type="button" className="btn btn-success">Reject Offer</button>
                        </div>
                    </div>
                    <br />
                    <hr />
                </div>
            </div>
            <div className="card" id="listing-item">
                <div className="card-body" id="listing-item">
                    <h5 className="card-title">FIFA 20</h5>
                    <div className="row">
                        <div className="col-4">
                            <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co206p.jpg"></img>
                        </div>
                        <div className="col-8">
                            <p><span className="badge badge-pill badge-dark">PlayStation 4</span> <span className="badge badge-pill badge-primary">From user xx_billy_xx</span></p>
                            <p>Powered by Frostbite™, EA SPORTS™ FIFA 20 for PC brings two sides of The World’s Game to life - the prestige of the professional stage and an all-new, authentic street football experience in EA SPORTS VOLTA.<a target="_blank" href="https://www.igdb.com/games/fifa-20"> Read more...</a></p>
                            <button type="button" className="btn btn-success">Accept Offer</button>
                            <button type="button" className="btn btn-success">Reject Offer</button>
                        </div>
                    </div>
                    <br />
                    <hr />
                </div>
            </div>
        </div>
    )
}

// NOTE: just used for example; once integrated, would take one of these and map the rest. 
// props needed: name, img, platform, offeringUser, storyline, url
// need function to truncate storyline at first "."

export default OfferCard