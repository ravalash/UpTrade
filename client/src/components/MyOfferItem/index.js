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
            <div className="row">
              <div className="col-4">
                <img
                  src={item.Listing.Item.cover}
                  className="img-fluid"
                  alt={"Cover of " + item.Listing.Item.name}
                />
              </div>
              <div className="col-8">
                <p>
                  <span className="badge badge-pill badge-dark">{item.Listing.Item.platform}</span>{" "}
                </p>
                {/* {item.Item.offer ===1 ? <ReviewOfferBtn /> : <></>} */}
                <button type="button" className="btn cancel-btn">
                  Cancel Offer
            </button>
              </div></div>
            <br />
            <hr />
          </div>
        </div>
      ))}

    </div>
  );
}

export default MyListingItem;
