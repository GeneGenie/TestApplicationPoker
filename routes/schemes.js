


//compile schema to model
module.exports = function(db){
    var userScheme = new db.Schema();

    return {
        users :db.model('users', userScheme)
    }
}