module.exports = function (sequelize, DataTypes) {
    const Listing = sequelize.define("Listing", {

      list_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },

      active: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
      },

      offer: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
      },

      barter: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
      },

      verified: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
      },

      request: {
       type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
      },


    });

    Listing.associate = function (models) {
        Listing.hasMany(models.Item, {
          onDelete: "cascade",
        });
        Listing.belongsTo(models.User, {
          foreignKey: {
            allowNull: false, 
          }, onDelete: 'cascade'
        });
      };
  



    return Listing;
  };
  