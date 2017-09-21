const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  var cookies = req.headers.cookie;
  if (!cookies) {
    console.log('>>>>>>>reached');
    models.Sessions.create()
                   .then((insertResult) => {
                     models.Sessions.get({id: insertResult.insertId})
                                    .then((session) => {
                                      req.session = session.hash;
                                    })
                     return req.session;
                   })
                   .then((session) => {
                     return req.cookie = session.hash;
                   })
                   .catch((err) => {
                     console.log(err);
                   });
    next();
  } else {
    next();
  }
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/
