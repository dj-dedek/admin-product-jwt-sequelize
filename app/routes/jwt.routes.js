module.exports = app => {
    const jwtStrategy = require("../controllers/jwt.controller.js");

    var router = require("express").Router();

    router.post("/login", jwtStrategy.login);

    // router.use(require('./tokenChecker'))

    router.get("/secure", jwtStrategy.tokenChecker);

    router.post("/token-refresh", jwtStrategy.tokenRefresh);

    app.use('/api', router);
}