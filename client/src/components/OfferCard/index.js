import React from "react";

function OfferCard(props) {
  console.log(`offer card ${props.data}`);
  return (
    <div>
      {props.data.length ? props.data
        .filter((x) => x.offered_item !== undefined)
        .map((item) => (
          <div className="card" id="listing-item" key={item.offered_item.id}>
            <div className="card-body" id="listing-item">
              <h5 className="card-title">{item.offered_item.name}</h5>
              <div className="row">
                <div className="col-4">
                  <img src={item.offered_item.cover}></img>
                </div>
                <div className="col-8">
                  <p>
                    <span className="badge badge-pill badge-dark">
                      {item.offered_item.platform}
                    </span>{" "}
                    <span className="badge badge-pill badge-primary">
                      From user {item.offered_item.User.name}
                    </span>
                  </p>
                  <p>
                    {item.offered_item.storyline}
                    <a target="_blank" href={item.offered_item.url}>
                      {" "}
                      Read more...
                    </a>
                  </p>
                  <button type="button" className="btn btn-success" data-id={item.id} data-dismiss="modal" onClick={props.acceptOffer}>
                    Accept Offer
                  </button>
                  <button type="button" className="btn btn-success" data-id={item.id} data-dismiss="modal" onClick={props.rejectOffer}>
                    Reject Offer
                  </button>
                </div>
              </div>
              <br />
              <hr />
            </div>
          </div>
        )) : <div />}
    </div>
  );
}

// NOTE: just used for example; once integrated, would take one of these and map the rest.
// props needed: name, img, platform, offeringUser, storyline, url
// need function to truncate storyline at first "."

export default OfferCard;
