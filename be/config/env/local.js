module.exports = {
  datastores: {
    APP_CHAT: {
      adapter: "sails-mongo",
      // migrate: 'alter',
      url: "mongodb+srv://turborvip:123456a@cluster0.2ev9png.mongodb.net/app-chat-sails?retryWrites=true&w=majority",
    },
  },
  //   port: 1013,
  //   hookTimeout: 600000000,
  //   TIME_ONLINE: 600000,
  //   redis: "redis://localhost:6379",
  //   queueGroup: "wallet-local-",
};
