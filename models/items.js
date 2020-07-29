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

          genre: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          img: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          lf1: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          lf2: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          lf3: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          lf4: {
            type: DataTypes.STRING,
            allowNull: true,
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
  