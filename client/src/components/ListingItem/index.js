import React from "react";

function ListingItem(props) {
    return (
        <div className="card" id="listing-item">
            <div className="card-body" id="listing-item">
                <h5 className="card-title">{props.name}</h5>
                <div className="row">
                    <div className="col-4">
                        <img src={props.img} className="img-fluid" alt="Cover of game" />
                    </div>
                    <div className="col-8">
                        <p><span className="badge badge-pill badge-dark">{props.platform}</span> <span className="badge badge-pill badge-primary">{props.genre}</span></p>
                        <h6>Looking for:</h6>
                        <ul>
                            <li>
                                {props.lf1}
                            </li>
                            <li>
                                {props.lf2}
                            </li>
                            <li>
                                {props.lf3}
                            </li>
                            <li>
                                {props.lf4}
                            </li>
                        </ul>
                        <button type="button" className="btn btn-success">Make an Offer</button>
                    </div>
                </div>
                <br />
                <hr />
            </div>
        </div>
    )
}

export default ListingItem