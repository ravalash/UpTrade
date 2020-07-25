const db = require("../models");

// Defining methods for the userController

//Find all by logged in user
module.exports = {
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

  findByListingId: function(req, res){
    db.Transaction.findAll({
        include: [
          {
            model: db.Listing, where: {id: req.params.id},
            include: [{ model: db.Item, where: { UserId: req.user.id } }],
            required: true,
          },
        ],
      })
        .then((result) => res.json(result))
        .catch((err) => res.status(422).json(err));

  },

  findByItemId: function(req, res) {
    db.Transaction.findOne({
        include: [
          {
            include: [{ model: db.Item, where: { UserId: req.user.id, id: req.params.id } }],
            required: true,
          },
        ],
      })
        .then((result) => res.json(result))
        .catch((err) => res.status(422).json(err));

  },

  create: function (req, res) {
    db.Transaction.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Transaction.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Transaction.destroy({
      where: {
        id: req.body.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
};
