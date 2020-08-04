const db = require("../models");

// Defining methods for the listingController
module.exports = {
  // Finds all listings owned by the currently logged in user
  findAll: function (req, res) {
    db.Listing.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  


  findAllById: function (req, res) {
    console.log('find all by id')
    db.Listing.findAll({
      where: {
        UserId: req.user
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Finds one listing by id owned by the currently logged in user
  findOneById: function (req, res) {
    db.Listing.findOne({
      where: {
        UserId: req.user.id,
        id: req.body.id
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Creates a listing from req.body with UserId supplied by the currently logged in user
  create: function (req, res) {
    console.log(req.body);
    db.Listing.create(req.body, { UserId: req.user.id })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Updates one listing by id owned by the currently logged in user
  update: function (req, res) {
    db.Listing.update(req.body, {
      where: {
        UserId: req.user.id,
        id: req.body.id
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Removes one listing by id owned by the currently logged in user
  remove: function (req, res) {
    db.Listing.destroy({
      where: {
        UserId: req.user.id,
        id: req.body.id
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
};
