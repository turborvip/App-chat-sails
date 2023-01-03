module.exports = {
  create: function (req, res) {
    const { text, to, from } = req.body;
    console.log('req.isSocket',req.isSocket)
    // Validate request params
    if (!text) {
      return res.badRequest();
    }
    // Create a new chat message
    Message.create({
      text: text,
      to: to,
      from: from,
    }).exec(function (err, message) {
      if (err) {
        return res.serverError(err);
      }
      // Emit the new message to the recipient's socket
      sails.sockets.broadcast.to(to).emit("chat", "newMessage", message);
      // Return the new message to the sender
      return res.json(message);
    });
  },

  createMessageForAll: function (req, res) {
    // Validate request params
    const { text } = req.body;
    if (!text) {
      return res.badRequest();
    }
    // Create a new chat message
    Message.create({
      text: text,
    }).exec(function (err, message) {
      if (err) {
        return res.serverError(err);
      }
      // Emit the new message to all connected sockets
      sails.sockets.emit("chat", "newMessage", message);
      // Return the new message to the client
      return res.json(message);
    });
  },

  list: function (req, res) {
    // Fetch all chat messages
    Message.find().exec(function (err, messages) {
      if (err) {
        return res.serverError(err);
      }
      // Return the messages to the client
      return res.json(messages);
    });
  },

  update: function (req, res) {
    const { text } = req.body;

    // Validate request params
    if (!req.param("id") || !text) {
      return res.badRequest();
    }
    // Update the chat message
    Message.update(
      {
        id: req.param("id"),
      },
      {
        text: text,
      }
    ).exec(function (err, message) {
      if (err) {
        return res.serverError(err);
      }
      // Emit the updated message to all connected sockets
      sails.sockets.emit("chat", "updateMessage", message);
      // Return the updated message to the client
      return res.json(message);
    });
  },

  delete: function (req, res) {
    // Validate request params
    if (!req.param("id")) {
      return res.badRequest();
    }
    // Delete the chat message
    Message.destroy({
      id: req.param("id"),
    }).exec(function (err, message) {
      if (err) {
        return res.serverError(err);
      }
      // Emit the deleted message to all connected sockets
      sails.sockets.emit("chat", "deleteMessage", message);
      // Return the deleted message to the client
      return res.json(message);
    });
  },
};
