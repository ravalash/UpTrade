module.exports = function (sequelize, DataTypes) {
  const Item = sequelize.define("Item", {

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    publisher: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },



  });

  Item.associate = function (models) {
    Item.hasOne(models.Listing, {
      foreignKey: {
        allowNull: false,
      }, onDelete: 'cascade'
    });
    Item.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      }, onDelete: 'cascade'
    });

    //Used to track where an item has been offered in excange
    Item.hasOne(models.Transaction, {
      as: 'offered_item',
      foreignKey: {
        allowNull: true,
      }, onDelete: 'set null'
    });
  };



  return Item;

};
