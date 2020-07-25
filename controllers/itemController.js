const db = require("../models");

// Defining methods for the userController
module.exports = {
  // Finds all items owned by a current user
  findAllById: function (req, res) {
    db.Item.findAll({
      where: {
        UserId: req.user.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Finds one item by id owned by the current user
  findOneById: function (req, res) {
    db.Item.findOne({
      where: {
        UserId: req.user.id,
        id: req.body.id
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Creates a new item with the UserId supplied by the current user
  create: function (req, res) {
    db.Item.create(req.body, {UserId: req.user.id})
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Updates an item by id that belongs to the current user
  update: function (req, res) {
    db.Item.update(req.body, {
      where: {
        UserId: req.user.id,
        id: req.body.id
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Deletes an item by id belonging to the current user
  remove: function (req, res) {
    db.Item.destroy({
      where: {
        UserId: req.user.id,
        id: req.body.id
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
};
