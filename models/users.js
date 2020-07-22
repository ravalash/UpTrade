var bcrypt = require("bcryptjs");


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
    }

  });



  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // User.addHook("beforeCreate", function(user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });

  return User;
};
