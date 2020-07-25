const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAllById: function (req, res) {
    db.Item.findAll({
      where: {
        UserId: req.user.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },

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

  create: function (req, res) {
    db.Item.create(req.body, {UserId: req.user.id})
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
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
