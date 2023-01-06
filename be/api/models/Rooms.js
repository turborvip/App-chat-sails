module.exports = {
    attributes: {
      members: { type: "string", required: true },
      uid:{ type: "string", required: true },
      type:{ type: "string", required: true, isIn: ["singer", "group",]},
      romMaster: { type: "string" },
    },
  };
  