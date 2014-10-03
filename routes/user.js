/* GET users listing. */
module.exports= require('./baseRouter')

routes = {
    "GET":{
        "login":function(req,res){
            res.render("login")
        },
        "register":function(req,res){
            res.render("register")
        },
        'logout':function(req,res){
            req.session.role='anon';
            req.session.user=null;
            res.redirect('/user/login');
        }
    },
    'POST':{
        "login":function(req,res){
            DB.users.find({login:req.body.login},function(err,data){
                if(!data.length){
                    res.render('login',{error:true});

                    return;
                }
                if(data[0].pwd!=req.body.pwd){
                    res.render('login',{error:true});
                    return;
                }

                req.session.user =data[0];
                req.session.role="user";
                res.redirect('/');
            }).lean()
        },
        'register':function(req,res){
            if(req.body.pwd!=req.body.repwd){
                res.render('register',{error:true,message:"Passwords are not identical"});
                return;
            }

            DB.users.find({login:req.body.login},function(err,data){
                if(data.length>0){
                    res.render('register',{error:true,message:"Such login is already used"});
                    return;
                }

                DB.users.collection.insert({login:req.body.login,pwd:req.body.pwd},function(err,data){

                    if(!err){
                        res.redirect('/user/registerSuccess');
                    }else{
                        res.render('register',{error:true,message:"Something went wrong"});
                    }

                });

            }).lean()


        }
    }
}

