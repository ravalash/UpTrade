// Imports:
const bcrypt = require("bcryptjs");

// User model:
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 60],
        isEmail: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 16]
      }
    },
    verified: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 10,
        isNumeric: true,
      },
      default: 0
    }
    // accessToken: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // }
  });

  User.associate = function (models) {
    User.hasMany(models.Listing, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "cascade",
    });
    User.hasMany(models.Item, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "cascade",
    });
    User.hasMany(models.Transaction, {
      foreignKey: {
        allowNull: true,
      },
      onDelete: "no action",
    });

    User.hasMany(models.Transaction, {
      foreignKey: {
        allowNull: true,
      },
      as: 'Seller',
      onDelete: "no action",
    });
  };

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};