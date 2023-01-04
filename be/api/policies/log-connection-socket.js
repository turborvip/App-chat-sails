module.exports = function (req, res, next) {

  // I was move it on /config/bootstrap /// oke oke
  
  // Listen for client connections
  sails.io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);

    // Listen for disconnections
    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
  // Continue processing the request
  return next();
};
