const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection successfull..."))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//   let user = await User.findOne({username: "ali"})
//   let post2 = new Post({
//     content: "Hi this is my second post..",
//     likes: 3,
//   });

//   post2.user = user;
 
//   await post2.save();

//   let result = await Post.find({});
//   console.log(result);
// };

// addData();

// let del = async () => {
//   await User.findByIdAndDelete("68c01cfbb096fbb1a807032b");
// }

// del();

const getData = async () => {
  let result = await Post.findOne({}).populate("user", "username");
  console.log(result);
};

getData();
