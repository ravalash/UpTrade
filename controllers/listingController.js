const db = require("../models");
const { Op } = require("sequelize");

// Defining methods for the listingController
module.exports = {
  // Finds all listings owned by the currently logged in user
  findAll: function (req, res) {
    db.Listing.findAll({
      include: [
        {
          model: db.Item,
          required: true,
        },
      ],
    })
      .then((result) => {
        result.forEach((element) => {
          element.request = JSON.parse(element.request);
        });
        res.json(result);
      })
      .catch((err) => res.status(422).json(err));
  },
  //Finds all listings owned by anyone else
  findAllSeller: function (req, res) {
    db.Listing.findAll({
      include: [
        {
          model: db.Item,
          required: true,
        },
      ],
      where: { UserId: { [Op.ne]: req.user } },
    })
      .then((result) => {
        result.forEach((element) => {
          element.request = JSON.parse(element.request);
        });
        res.json(result);
      })
      .catch((err) => res.status(422).json(err));
  },

  findAllById: function (req, res) {
    console.log("find all by id");
    db.Listing.findAll({
      include: [
        {
          model: db.Item,
          required: true,
        },
      ],
      where: {
        UserId: req.user,
        active: 1
      },
    })
      .then((result) => {
        result.forEach((element) => {
          element.request = JSON.parse(element.request);
        });
        res.json(result);
      })
      .catch((err) => res.status(422).json(err));
  },

  //Finds non secure info for one listing by ID
  findInfoById: function (req, res) {
    console.log(`load info for ${req.params.id}`);
    db.Listing.findOne({
      where: {
        active: 1,
        id: req.params.id,
      },
      attributes: ["request"],
    })
      .then((result) => {
        res.json(JSON.parse(result.request));
      })
      .catch((err) => res.status(422).json(err));
  },

  // Finds one listing by id owned by the currently logged in user
  findOneById: function (req, res) {
    console.log(`load listings for ${req.params.id}`);
    db.Listing.findOne({
      where: {
        UserId: req.user.id,
        id: req.params.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Creates a listing from req.body with UserId supplied by the currently logged in user
  create: function (req, res) {
    req.body.UserId = req.user;
    console.log(req.body);
    db.Listing.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Updates one listing by id owned by the currently logged in user
  update: function (req, res) {
    db.Listing.update(req.body, {
      where: {
        UserId: req.user,
        id: req.body.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },

  updateSeller: function (req, res) {
    db.Listing.update(req.body, {
      where: { UserId: req.user, id: req.params.id },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Removes one listing by id owned by the currently logged in user
  remove: function (req, res) {
    db.Listing.destroy({
      where: {
        UserId: req.user.id,
        id: req.body.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
};
