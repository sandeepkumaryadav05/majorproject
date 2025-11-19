const Listing = require("../models/listing.js");

module.exports.index=async (req, res,next) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.newListing=(req,res)=>{
    res.render('listings/new');
}

module.exports.show=async (req,res,next)=>{
    let{id}=req.params;
    const listing=await Listing.findById(id).populate({path:"review",populate:{path:"author"},}).populate("owner");//for populate the data of review
    if(!listing){
    req.flash("error","Listing not found!");
    return res.redirect("/listings");
    }
    // console.log(listing);
    res.render("listings/show.ejs",{listing});
}

module.exports.createListing=async(req,res,next)=>{
    //let{title,description,image,price,location,country}=req.body;//but  lenthy
      let url=req.file.path;//for cloudinary
      let filename=req.file.filename;//for cloudinary
      const newListing = new Listing(req.body.listing);
      newListing.owner = req.user._id; // Set the owner to the logged-in user
      newListing.image = {url,filename}; //for cloudinary
      await newListing.save();
      req.flash("success","New listing created successfully!");
      res.redirect("/listings"); 
}

module.exports.edit=async (req,res,next)=>{
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
      req.flash("error","Listing not found!");
      return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing});
}

module.exports.update=async (req,res,next)=>{
    let { id } = req.params;
    let listing=await Listing.findByIdAndUpdate(id, { ...req.body.listing });//reconstruct
    if(typeof req.file !== "undefined"){
        let url=req.file.path;//for cloudinary
        let filename=req.file.filename;
        listing.image = {url,filename};
        await listing.save();
    }
    req.flash("success","New listing updated successfully!");
    res.redirect(`/listings/${id}`);
}

module.exports.delete=async (req,res,next)=>{
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing deleted successfully!");
    res.redirect("/listings");
}