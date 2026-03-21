function checkLogin(req,res,next){
    let token = "abc";

    let valid = token === "abc";

    if(!valid){
        return res.status(401).send("you are not authorized")
    }else{
        next();
    }
}


function checkAdmin(req,res,next){
    let admin = true;
    if(!admin){
        return res.status(401).send("you are not authorized must be admin");
    }else{
        next();
    }
}

module.exports = {
    checkLogin,
    checkAdmin,
}