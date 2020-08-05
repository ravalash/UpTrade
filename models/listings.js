const { Sequelize } = require(".");

module.exports = function (sequelize, DataTypes) {
  const Listing = sequelize.define("Listing", {
    // replaced with Sequelize built in dates
    // list_date: {
    //   type: DataTypes.DATEONLY,
    //   allowNull: false,
    //   validate: {
    //     isDate: true,
    //   },
    // },


    // Whether listing is currently active - binary
    active: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },

    // Whether or not an offer has been made on the listing - binary
    offer: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },

    // Whether or not the listing is considering offers not included in the requested items - binary
    barter: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },

    // Whether or not the listing is only considering trades from verified users - binary
    verified: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },

    // An array of the items that user is looking for in trade
    request: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
  });

  Listing.associate = function (models) {
    Listing.belongsTo(models.Item, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "cascade",
    });
    Listing.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "cascade",
    });

    // Deleting a listing does not delete all transactions so they can be maintained in the database for records
    Listing.hasMany(models.Transaction, {
      foreignKey: {
        allowNull: true,
      },
      onDelete: "set null",
    });
  };

  return Listing;
};
