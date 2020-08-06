import React from "react";
import { MakeOfferBtn } from "../Buttons";

function ListingItem(props) {
  return (
    <div>
      {props.data !== undefined ? (
        props.data
          .filter((x) => x.Item !== undefined)
          .map((item) => {
            console.log(item.request.length);
            return (
              <div className="card" id="listing-item" key={item.id}>
                <div className="card-body" id="listing-item">
                  <h5 className="card-title">{item.Item.name}</h5>
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={item.Item.cover}
                        className="img-fluid"
                        alt={"Cover of " + item.Item.name}
                      />
                    </div>
                    <div className="col-8">
                      <p>
                        <span className="badge badge-pill badge-dark">
                          {item.Item.platform}
                        </span>{" "}
                        <span className="badge badge-pill badge-primary">
                          {item.genre}
                        </span>
                      </p>
                      <p>{item.Item.storyline}</p>
                      <h6>Looking for:</h6>
                      <ul>
                        {item.request.map((x, index) => {
                          return (
                            <li key={index}>
                              {x.title} on {x.platform}{" "}
                            </li>
                          );
                        })}
                      </ul>
                      <MakeOfferBtn newOffer={props.newOffer} id={item.id} />
                    </div>
                  </div>
                  <br />
                  <hr />
                </div>
              </div>
            );
          })
      ) : (
        <div />
      )}
    </div>
  );
}

export default ListingItem;
