module.exports = function (sequelize, DataTypes) {
  const Item = sequelize.define("Item", {


        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          platform: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          storyline: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          cover: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          url: {
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
