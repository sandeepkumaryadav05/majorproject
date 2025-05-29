const User=require("../models/users.js");

module.exports.index=(req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.signUp=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        const newUser=new User({email,username});
        const registeredUser=await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser,err=>{  //login the user after signing up 
            if(err) return next(err);
        });
        req.flash("success","Welcome to Wanderlust!");
        res.redirect("/listings");
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }   
}

module.exports.login=(req,res)=>{
    res.render("users/login.ejs");
}


module.exports.postLogin=async (req, res) => {
    req.flash("success", "Welcome back!");
    const redirectUrl = res.locals.redirectUrl || "/listings"; // Fallback to "/listings" if undefined
    res.redirect(redirectUrl);
}

module.exports.logout=(req,res)=>{
    req.logout(function(err) {
        if (err) { 
            return next(err);
         }
        req.flash("success","Logged out successfully!");
        res.redirect("/listings");
      });
}