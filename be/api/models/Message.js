/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    text: {
      type: "string",
      required: true,
    },
    userID: {
      type: "string",
      required: true,
    },
    room: {
      type: "string",
      required: true,
    },
  },
};
