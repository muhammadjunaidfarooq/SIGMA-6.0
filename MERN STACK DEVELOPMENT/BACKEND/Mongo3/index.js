const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

main()
  .then(() => {
    console.log("Connection successful.");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

// Add Route
app.get("/chats/new", async (req, res) => {
  res.render("addchat.ejs");
});

// Create Route
app.post("/chats", async (req, res) => {
  let { from, msg, to } = req.body;
  let newChat = new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((result) => {
      console.log("Data is saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let selectedChat = await Chat.findById(id);
  res.render("edit.ejs", { selectedChat });
});

app.patch("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let selectedChat = await Chat.findById(id);
  let newMsg = req.body.msg;
  Chat.findByIdAndUpdate({ _id: id }, { msg: newMsg })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

// Destroy Route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let chatDeleted = await Chat.findByIdAndDelete(id);
  console.log(chatDeleted);
  res.redirect("/chats");
});

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(8080, () => {
  console.log("app is listening.....");
});
