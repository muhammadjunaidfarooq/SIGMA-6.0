const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

let mongooseUrl = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to |DB|");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongooseUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")))

// Index Route
app.get("/listings", async (req, res) => {
  let allListings = await Listing.find();
  res.render("listings/index.ejs", { allListings });
});

// New route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

app.post("/listings", async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});

// Edit & update Route
app.get("/listings/:id/edit", async (req, res) => {
  let {id} = req.params;
  let list = await Listing.findById(id);
  res.render("listings/edit.ejs", {list})
  
});

app.put("/listings/:id", async(req, res) => {
  let {id} = req.params;
  await Listing.findByIdAndUpdate(id, {...req.body.listing});
  res.redirect(`/listings/${id}`);
})

// Delete Route
app.delete("/listings/:id", async(req, res) => {
  let {id} = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
})


// Show Route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});



// app.get("/testlisting", async(req, res) => {
//     let sampleListing = new Listing({
//         title: "My new Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Condo in Islamabad",
//         country: "Pakistan",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send(sampleListing);
// });

// app.get("/", (req, res) => {
//   res.send("(: Hi, I am root :)");
// });

app.listen(8080, () => {
  console.log("Server is Listening to 8080~~");
});
