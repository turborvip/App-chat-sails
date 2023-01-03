/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */
const requestIp = require('request-ip');
const express = require('express');
const _ = require('lodash');
module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * The order in which middleware should be run for HTTP requests.           *
    * (This Sails app's routes are handled by the "router" middleware below.)  *
    *                                                                          *
    ***************************************************************************/

    order: [
      'cookieParser',
      'logApiCall',
      'getIp',
      'cookieParser',
      'session',
      'bodyParser',
      'compress',
      'poweredBy',
      'router',
      'www',
      'favicon',
    ],

    getIp: function (req, res, next) {
      const clientIp = requestIp.getClientIp(req);
      // console.log('req.originalUrl-----getIp', req.originalUrl)
      // console.log('req.query----getIp', req.query)

      req.clientIp = clientIp;
      if (!req.body) req.body = {}
      req.body.ip = clientIp;
      return next();
    },
    logApiCall: (function () {
      return function (req, res, next) {
        // req.setTimeout(40000);
        let startTime = new Date().getTime();
        res.on('close', (err) => {
          console.log('***********CLOSE*************')
        })
        // console.log("Requested :: ", req.method, req.url, req.headers.authorization, req.body);
        console.log("Requested :: ", req.method, req.url, req.body);
        res.on('end', () => {
        })
        res.on('finish', (res) => {

        })
        return next();
      }
    })(),

    /***************************************************************************
    *                                                                          *
    * The body parser that will handle incoming multipart HTTP requests.       *
    *                                                                          *
    * https://sailsjs.com/config/http#?customizing-the-body-parser             *
    *                                                                          *
    ***************************************************************************/

    bodyParser: (function _configureBodyParser(){
      var skipper = require('skipper');
      var middlewareFn = skipper({
        strict: true,
        // ... more Skipper options here ...
      });
      return middlewareFn;
    })(),

  },

};
