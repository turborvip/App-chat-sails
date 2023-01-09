/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
var sails = require("sails");

module.exports.bootstrap = async function (cb) {
  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  sails.on("ready", function () {
    if (sails.hooks.http.server) {
      console.log("ahehe");
    }

    const socketIo = require("socket.io")(sails.hooks.http.server);

    // Set up a connection event listener
    socketIo.on("connection", (socket) => {
      console.log(`Client connected: ${socket.id}`);
      socketIo.emit("new message", { message: "Hello World!" });
      socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}`);
      });
    });
    module.exports.socketIo = socketIo;
  });

  await bootstrapAllControllers();
  console.log("Server is already!");

  cb();
};

let bootstrapAllControllers = async () => {
  let promises = [];
  for (var index in sails.models) {
    let model = sails.models[index];
    if (model.bootstrap) {
      promises.push(model.bootstrap());
    }
  }
  await Promise.all(promises);
};
