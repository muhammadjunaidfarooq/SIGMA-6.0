const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");
const { wrap } = require("module");

main()
  .then(() => {
    console.log("Connection successful.");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// index route
app.get(
  "/chats",
  wrapAsync(async (req, res, next) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
  })
);

// Add Route
app.get(
  "/chats/new",
  wrapAsync(async (req, res) => {
    res.render("addchat.ejs");
  })
);

// Create Route
app.post(
  "/chats",
  wrapAsync(async (req, res, next) => {
    let { from, msg, to } = req.body;
    let newChat = new Chat({
      from: from,
      msg: msg,
      to: to,
      created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
  })
);

// Edit Route
app.get(
  "/chats/:id/edit",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  })
);

app.patch(
  "/chats/:id",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let newMsg = req.body.msg;
    await Chat.findByIdAndUpdate({ _id: id }, { msg: newMsg });
    res.redirect("/chats");
  })
);

// Destroy Route
app.delete(
  "/chats/:id",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let chatDeleted = await Chat.findByIdAndDelete(id);
    console.log(chatDeleted);
    res.redirect("/chats");
  })
);

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// New Route / show route
app.get(
  "/chats/:id",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      return next(new ExpressError(401, "Chat not Found"));
    }
    res.render("edit.ejs", { chat });
  })
);

const handelValidationError = (err) => {
  console.log("This was a validation error. Please follow the rules");
  console.dir(err.message);
  return err;
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handelValidationError(err);
  }
  next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "some err occure" } = err;
  res.status(status).send(message);
});

app.get("/", (req, res) => {
  res.send("Root is working");
});

app.listen(8080, () => {
  console.log("app is listening.....");
});
