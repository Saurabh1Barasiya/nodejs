
function checkLogin(req, res, next) {
    let token = "xyz";
    if (token === "xyz") {
        next();
    } else {
        res.status(401).send("you are now authorized");
    }
}

module.exports = {
    checkLogin
}