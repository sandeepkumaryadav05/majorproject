
if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}


const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const session=require("express-session");
const MongoStore = require('connect-mongo');  // for session storage in MongoDB atlas
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/users.js");


const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");

 const urlDb=process.env.ATLASDB_URL;
main()
.then(()=>{
    console.log("connected DB");
    
}).catch((err) => console.log(err));
async function main() {
    await mongoose.connect(urlDb);
  }

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));//for ejs file access
  app.use(express.urlencoded({ extended: true }));//for params
  app.use(express.json());
  app.use(methodOverride("_method"));
  app.engine('ejs',ejsMate);
  app.use(express.static(path.join(__dirname,"/public")));


  const store = MongoStore.create({
    mongoUrl: urlDb,
    touchAfter: 24 * 3600, // time in seconds
    crypto: {
      secret: process.env.SECRET, // replace with your own secret key
    },
    ttl: 14 * 24 * 60 * 60 // = 1days. Default
  });

  store.on("error", function(e) {
    console.log("Session store error", e);
  });
  const sessionOption={
    store: store,
    secret: process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        expires:Date.now()+1000*60*60*24*7,//7 days
        maxAge:1000*60*60*24*7,
    }
  }
//   app.get("/",(req,res)=>{
//     res.send("hi I am root");  
//  });

 app.use(session(sessionOption));
 app.use(flash());
   
 app.use(passport.initialize());//for passport
 app.use(passport.session());//for passport
  passport.use(new LocalStrategy(User.authenticate()));//for passport
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());



  app.use((req,res,next)=> {
    res.locals.success=req.flash("success");//for flash message
    res.locals.error=req.flash("error");//for flash message
    res.locals.currentUser=req.user;//for user data
    next();
  });


  app.use("/listings",listingRouter);
  app.use("/listings/:id/review",reviewRouter);//for review route
  app.use("/",userRouter);


app.all("*",(req,res,next)=>{
   next(new ExpressError(404,"page not found"));
});

app.use((err,req,res,next)=>{
  let{statusCode=500,message}=err;
  res.status(statusCode).render("error.ejs",{message});//it use for show error
  //res.status(statusCode).send(message);
})

app.listen(process.env.PORT||8080,()=>{
    console.log("server is connected");   
});
