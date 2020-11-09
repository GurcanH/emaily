"use strict";

var mongoose = require('mongoose');

var requireLogin = require('../middlewares/requireLogin');

var requireCredits = require('../middlewares/requireCredits');

var Survey = mongoose.model('surveys');

module.exports = function (app) {
  app.post('/api/surveys', requireLogin, requireCredits, function (req, res) {
    var _req$body = req.body,
        title = _req$body.title,
        subject = _req$body.subject,
        body = _req$body.body,
        recipients = _req$body.recipients;
    var survey = new Survey({
      title: title,
      subject: subject,
      body: body,
      repients: recipients.split(',').map(function (email) {
        return {
          email: email
        };
      }),
      _user: req.user.id,
      dateSent: Date.now()
    });
  });
};