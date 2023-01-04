module.exports = {
  attributes: {
    userId: { type: "string", required: true },
    title: { type: "string", allowNull: false },
    message: { type: "string" },
    status: { type: "string", required: true, isIn: ["read", "unread"] },
  },
};
