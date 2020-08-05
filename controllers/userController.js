const db = require("../models");

// Defining methods for the userController
module.exports = {
  // Finds a user baed on the currently logged in user
  findById: function (req, res) {
    db.User.findOne({
      where: {
        id: req.user,
      },
    })
      .then((result) =>{
       res.json({id: req.user, name: result.name})})
      .catch((err) => res.status(422).json(err));
  },
  // Creates a user from req.body
  create: function (req, res) {
    db.User.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Updates a user based on the currently logged in user
  update: function (req, res) {
    db.User.update(req.body, {
      where: {
        id: req.user.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  // Removes a user based on the currently logged in user
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
