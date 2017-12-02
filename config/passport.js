var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var mongoose = require('mongoose');
module.exports = function(){
    var Usuario = mongoose.model('Usuario');

    var Strategy = new GoogleStrategy({
        clientID: '572950993191-0d3567v3gpf5ugq26klvkannnvbo3mdk.apps.googleusercontent.com',
        clientSecret: 'NzW9lsoAuC1IC-D2qbuyh4f1',
        callbackURL: 'http://localhost:3000/auth/google/callback',
        scope: 'profile email'
    },

    function (accessToken, refreshToken, profile, done){
        // console.log(profile);

        // return done(null, 'profile');

        var userEmail = '';

        if(profile.emails && profile.emails.length > 0){
            userEmail = profile.emails[0].value;
        }

        Usuario.findOrCreate(
            {login: profile.id},
            {nome: profile.displayName},
            {email: userEmail},
            function(erro, usuario){
                if(erro){
                    console.log(erro);
                    return done(erro);

                }
                return done(null, usuario);
            }
        );
    }
    );

    passport.use(Strategy);

    passport.serializeUser(function(usuario, pronto){
        pronto(null, usuario._id);
    });

    passport.deserializeUser(function(id, pronto){
        Usuario.findbyId(id).exe().then(
            function(usuario){
                pronto(null, usuario);
            }
        )
    });


}


