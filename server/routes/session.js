var path = require('path');
var sessionRest = require(path.join('..', 'rest', 'session.js'));

module.exports = function(app) {
    app.route("/session")
        .post(sessionRest.create);
}