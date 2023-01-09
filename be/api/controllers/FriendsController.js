const bootstrap = require('../../config/bootstrap');

module.exports = {
  find: async function (req, res) {
    // Get the search query from the request body
    const { search, userID } = req.body;
    const page = req.body.page || 1;
    const pageSize = req.body.pageSize || 20;
    const offset = (parseInt(page) - 1) * parseInt(pageSize);

    // Find friends matching the query using the Friends model
    try {
      const data = await Users.find({
        where: {
          or: [{ name: { contains: search } }, { email: { contains: search } }],
          id: { "!=": userID },
        },
        select: ["id", "avatar", "name"],
        skip: offset,
        limit: pageSize,
      });

      // ahihi
      bootstrap.socketIo.emit("message",{data:"ahihi"})

      // Count the number of friends but not the current user
      const dataCount = await Users.count({ id: { "!=": userID } });

      const totalPage = Math.ceil(dataCount / parseInt(pageSize));
      // Return the found friends
      res.json(data, totalPage, page, pageSize);
    } catch (error) {
      // Return an error if something went wrong
      res.serverError(error);
    }
  },

  
};
