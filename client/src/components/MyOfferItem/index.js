import React from "react";

function MyListingItem(props) {
  console.log(props.bids);

  return (
    <div>
      {props.bids.filter((x) => x.Listing !== undefined).map((item) => (
    //   <p>My listing item</p>

      <div className="card" id="listing-item" key={item.ListingId}>
        <div className="card-body" id="listing-item">
          <h5 className="card-title">{item.Listing.Item.name}</h5>
          <div>
            <p>
              <span className="badge badge-pill badge-dark">{item.Listing.Item.platform}</span>{" "}
              <span className="badge badge-pill badge-primary">Adventure</span>
            </p>
            {/* {item.Item.offer ===1 ? <ReviewOfferBtn /> : <></>} */}
            <button type="button" className="btn cancel-btn">
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
