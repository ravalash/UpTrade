const db = require("../models");

// Defining methods for the userController
module.exports = {
  // Finds all items owned by a current user
  findAllById: function (req, res) {
    console.log(`items requested for user ${req.user}`);
    db.Item.findAll({
      where: {
        UserId: req.user,
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
        id: req.body.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Creates a new item with the UserId supplied by the current user
  create: function (req, res) {
    req.body.UserId = req.user;
    db.Item.create(req.body)
      .then((result) =>{
        console.log(result);
         res.json(result)})
      .catch((err) => {
        // console.log(res);
        res.status(422).json(err);
      });
  },
  // Updates an item by id that belongs to the current user
  update: function (req, res) {
    db.Item.update(req.body, {
      where: {
        UserId: req.user.id,
        id: req.body.id,
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
        id: req.body.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
};
