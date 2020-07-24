module.exports = function (sequelize, DataTypes) {
    const Transaction = sequelize.define("Transaction", {

        
        // 0 - Offer Made
        // 1- Offer Declined
        // 2 - Offer Accepted
        // 3 - Offer Rescinded

        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              min: 0,
              max: 3,
              isNumeric: true,
            },
          }

          




    });

    Transaction.associate = function (models) {

        Transaction.belongsTo(models.Listing, {
            foreignKey: {
              allowNull: true,
            },
            onDelete: "set null",
          });

          Transaction.belongsTo(models.Item, {
              as: 'offered_item',
            foreignKey: {
              allowNull: true,
            },
            onDelete: "set null",
          });


          

      };
  


    return Transaction;
    
  };
  