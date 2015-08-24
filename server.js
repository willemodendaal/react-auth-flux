var SecureConstants = require('./src/js/config/secureConstants');
var express = require('express');
var Passport = require('passport');
var FacebookStrategy = ('passport-facebook').Strategy;

var app = express();
app.use(express.static('dist'));

//Configure Facebook authentication provider.
Passport.use(new FacebookStrategy({
        clientID: SecureConstants.FACEBOOK_APP_ID,
        clientSecret: SecureConstants.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        enableProof: false
    },
    function(accessToken, refreshToken, profile, done) {

        /*  -- Creat user in our own db --
         User.findOrCreate({ facebookId: profile.id }, function (err, user) {
         return done(err, user);
         });
         */
    }
));

app.get('/auth/facebook',
    Passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
    Passport.authenticate('facebook', { failureRedirect: '#/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);

});

