const db = require("../models");

// Defining methods for the userController
module.exports = {
  findById: function (req, res) {
    db.User.findOne({
      where: {
        id: req.user.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User.update(req.body, {
      where: {
        id: req.user.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.destroy({
      where: {
        id: req.user.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
};
