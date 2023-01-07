/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/
  "POST /getToken": { action: "Login/getNewToken" },
  "POST /login": { action: "Login/postLogin" },
  "POST /register": { action: "Register/createAccount" },

  // task
  "GET /getTasks": { action: "Tasks/getTasks" },

  // chat
  "POST /api/messages": "ChatController.create",
  "GET /api/messages": "ChatController.list",
  "PUT /api/messages/:id": "ChatController.update",
  "DELETE /api/messages/:id": "ChatController.delete",

  //friends{ action: "Friends/find" }
  'POST /friends/find': 'FriendsController.find',

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
