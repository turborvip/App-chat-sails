module.exports = {
  attributes: {
    sender: { type: "string", required: true },
    recipient: { type: "string", required: true },
    type: {
      type: "string",
      allowNull: false,
      isIn: ["add friend", "report", "voice call", "video call","set relationship"],
    },
    message: { type: "string" },
    status: { type: "string", required: true, isIn: ["read", "unread"] },
  },
};
