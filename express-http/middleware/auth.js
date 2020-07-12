function auther(req, res, next) {
    console.log("Authenticating ...")
    next()
}

module.exports = auther