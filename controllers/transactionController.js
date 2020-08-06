const db = require("../models");
const { Op } = require("sequelize");

// Defining methods for the userController

//Find all by logged in user
module.exports = {
  // Finds all transactions owned by a current user. This will represent transactions where the user is the one who made an *offer*
  findAllById: function (req, res) {
    db.Transaction.findAll({
      include: [
        {
          model: db.Listing,
          include: [{ model: db.Item, where: { UserId: req.user.id } }],
          required: true,
        },
      ],
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },

  findAllOffers: function (req, res) {
    console.log(`loading all offers for listing ${req.params.id}`);
    db.Transaction.findAll({
      include: [
        { model: db.Item, as: "offered_item", include: [{ model: db.User }] },
      ],
      where: { ListingId: req.params.id, status: 0 },
    }).then((result) => {
      console.log(result);
      res.json(result);
    });
  },

  // Finds all active transactions where the user has bid on another user's listing
  findActiveBids: function (req, res) {
    db.Transaction.findAll({
      include: [
        {
          model: db.Listing,
          include: [{ model: db.Item, required: true }],
          required: true,
        },
      ],
      where: { UserId: req.user },
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(422).json(err));
  },

  // Finds one item by id owned by the current user
  findOneById: function (req, res) {
    db.Transaction.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: db.Listing,
          include: [{ model: db.Item, where: { UserId: req.user.id } }],
          required: false,
        },
      ],
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Finds one transaction by listing id owned by the current user
  findByListingId: function (req, res) {
    db.Transaction.findAll({
      include: [
        {
          model: db.Listing,
          where: { id: req.params.id },
          include: [{ model: db.Item, where: { UserId: req.user.id } }],
          required: true,
        },
      ],
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Finds one transaction by item id owned by the current user
  findByItemId: function (req, res) {
    db.Transaction.findOne({
      include: [
        {
          include: [
            {
              model: db.Item,
              where: { UserId: req.user.id, id: req.params.id },
            },
          ],
          required: true,
        },
      ],
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Creates a new item with the UserId supplied by the current user
  create: function (req, res) {
    req.body.UserId = req.user;
    const transaction = req.body;
    db.Listing.findOne({
      where: {
        id: req.body.ListingId,
        UserId: { [Op.ne]: req.user },
      },
      attributes: ["UserId"],
    })
      .then((result) => {
        transaction.SellerId = result.UserId;
        db.Item.findOne({
          where: { id: transaction.offeredItemId, UserId: req.user },
        })
          .then((result) => {
            if (result !== null) {
              transaction.status = 0;
              db.Transaction.create(transaction)
                .then((result) => {
                  db.Listing.update(
                    { offer: 1 },
                    { where: { id: transaction.ListingId } }
                  )
                    .then(res.json(result))
                    .catch((err) => res.status(422).json(err));
                })
                .catch((err) => res.status(422).json(err));
            } else {
              res.status(422);
            }
          })
          .catch((err) => res.status(422).json(err));
      })
      .catch((err) => res.status(422).json(err));
  },

  // Updates an item where the user is the *buyer* based on a transaction number
  updateBuyer: function (req, res) {
    db.Transaction.update(req.body, {
      where: {
        id: req.body.id,
        UserId: req.user.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Updates an item where the user is the *seller* based on a transaction number
  updateSeller: function (req, res) {
    console.log(`updating transaction ${req.params.id} with ${req.body}`);
    db.Transaction.update(req.body, {
      where: {
        id: req.params.id,
        SellerId: req.user,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },

  acceptOffer: function (req, res) {
    console.log(`accepting offer for transaction ${req.params.id}`);
    db.Transaction.findOne({
      include: [{ model: db.Listing, attributes: ["ItemId"] }],
      where: { SellerId: req.user, id: req.params.id },
    })
      .then((result) => {
        const listingId = result.ListingId;
        const sellerItem = result.Listing.ItemId;
        const buyerItem = result.offeredItemId;
        const sellerId = result.SellerId;
        const buyerId = result.UserId;
        console.log(
          `transfer buyer item ${buyerItem} to seller id ${sellerId}`
        );
        db.Item.update({ UserId: sellerId }, { where: { id: buyerItem } })
          .then(() => {
            console.log(
              `transfer seller item ${sellerItem} to buyer id ${buyerId}`
            );
            db.Item.update(
              { UserId: buyerId },
              { where: { id: sellerItem } }
            ).then(() => {
              console.log(`Change listing id ${listingId} to inactive`);
              db.Listing.update(
                { active: 0 },
                { where: { id: listingId } }
              ).then(() => {
                console.log(
                  `Update transaction id ${req.params.id} to 2 for offer accepted`
                );
                db.Transaction.update(
                  { status: 2 },
                  { where: { id: req.params.id } }
                ).then((result) => {
                  console.log(result);
                  res.json(result);
                });
              });
            });
          })
          .catch((err) => res.status(422).json(err));
      })
      .catch((err) => res.status(422).json(err));
  },

  // Removes a transaction where the user is the *buyer* based on transaction number
  remove: function (req, res) {
    db.Transaction.destroy({
      where: {
        id: req.body.id,
        UserId: req.user.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
};
