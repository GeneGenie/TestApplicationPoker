var ACL = {
    'user':{default:"/user/login",allow:[".*"]},
    "anon":{default:"/user/login",allow:["\/user\/login", "\/user\/register"]}
}

module.exports = function (req, res, next) {

    var role = req.session.role ||'anon';
    if (_.find(ACL[role].allow, function (allowPattern) {
        return new RegExp("^" + allowPattern + "$", "i").test(req.url);
    })) {
        next();
    } else {
        res.redirect(ACL[role].default)
        return;
    }


}