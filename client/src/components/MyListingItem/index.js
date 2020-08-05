import React from "react";
import { ReviewOfferBtn } from "../Buttons";

function MyListingItem(props) {
  let isOffer = true;
  console.log(props.data);

  return (
    <div>
      {props.data.filter((x) => x.Item !== undefined).map((item) => (

    //   <p>My listing item</p>

      <div className="card" id="listing-item" key={item.id}>
        <div className="card-body" id="listing-item">
          <h5 className="card-title">{item.Item.name}</h5>
          <div>
            <p>
              <span className="badge badge-pill badge-dark">{item.Item.platform}</span>{" "}
              <span className="badge badge-pill badge-primary">Adventure</span>
            </p>
            {item.Item.offer ===1 ? <ReviewOfferBtn /> : <></>}
            <button type="button" className="btn btn-success">
              Cancel Listing
            </button>
          </div>
          <br />
          <hr />
        </div>
      </div>
      ))}

    </div>
  );
}

export default MyListingItem;
