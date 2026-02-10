function middlewareName(req, res, next) {
    console.log("Middleware executed");
    next();   // very important
}


