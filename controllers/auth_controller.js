const passport = require("passport")
const User = require("../models/user")

const register = function(req,res){
    User.register(new User ({
        username: req.body.username,
        email: req.body.email
    }), req.body.password, function(err){
        if(err){
            res.status(500)
            res.json({
                error: err
            })
        }else {
            loginUser(req, res)
        }
    })
}

const loginUser = function(req, res) {
    passport.authenticate("local")(req, res, function () {
        console.log("authenticated", req.user.username)
        console.log("session: ", req.session)
        console.log("user: ", req.user)
        res.status(200)
        res.json({user: req.user, sessionId: req.sessionId})
    })
}

const logout = function(req,res){
req.logout()
console.log("Logged out")
console.log("session: ", req.session)
console.log("user: ", req.user)
res.sendStatus(200)
}

function activeUserSession(req,res) {
    console.log('in activeUserSession sessionID', req.sessionID)
    console.log('in activeUserSession user', req.user)
    if(req.sessionID && req.user) {
        res.status(200);
        res.send({
            sessionId: req.sessionID,
            user: req.user
        })
    }
    else {
        res.sendStatus(403);
    }    
}

module.exports = {register, loginUser, logout, activeUserSession}