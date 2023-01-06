/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    username: {
      type: "string",
      allowNull: true,
      unique: true,
      isNotEmptyString: true,
    },
    avatar: {
      type: "string",
      defaultsTo:
        "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
    },
    password: { type: "string", allowNull: true, isNotEmptyString: true },
    name: { type: "string", allowNull: false },
    email: { type: "string", allowNull: false, isEmail: true },
    status: {
      type: "string",
      required: true,
      isIn: ["active", "unactive", "inmeeting"],
    },
  },
};
