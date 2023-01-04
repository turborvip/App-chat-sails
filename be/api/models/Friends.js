module.exports = {
  attributes: {
    userId: {
      type: "string",
      allowNull: true,
      unique: true,
      isNotEmptyString: true,
    },
    friends: { type: "string" },
  },
};
