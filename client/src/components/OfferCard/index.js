import React from "react";

function OfferCard(props) {
  console.log(props.data);
  return (
    <div>
      {props.data
        .filter((x) => x.offered_item !== undefined)
        .map((item) => (
          <div className="card" id="listing-item">
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
                    Powered by Frostbite™, EA SPORTS™ FIFA 20 for PC brings two
                    sides of The World’s Game to life - the prestige of the
                    professional stage and an all-new, authentic street football
                    experience in EA SPORTS VOLTA.
                    <a target="_blank" href={item.offered_item.url}>
                      {" "}
                      Read more...
                    </a>
                  </p>
                  <button type="button" className="btn btn-success">
                    Accept Offer
                  </button>
                  <button type="button" className="btn btn-success">
                    Reject Offer
                  </button>
                </div>
              </div>
              <br />
              <hr />
            </div>
          </div>
        ))}
    </div>
  );
}

// NOTE: just used for example; once integrated, would take one of these and map the rest.
// props needed: name, img, platform, offeringUser, storyline, url
// need function to truncate storyline at first "."

export default OfferCard;
