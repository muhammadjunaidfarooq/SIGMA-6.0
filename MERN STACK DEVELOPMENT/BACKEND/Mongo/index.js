const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete({ _id: "68b7b2134953b6c99d0786c1" })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// User.findByIdAndUpdate({ _id: "68b7b2134953b6c99d0786c0"}, { age: 42 }, {new: true})
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOne({_id: "68b7b2134953b6c99d0786c0"})
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.insertMany([
//     { name: "Tony", email: "tony@gmail.com", age: 50 },
//     { name: "Bruce", email: "bruce@gmail.com", age: 50 },
//     { name: "Peter", email: "peter@gmail.com", age: 30 },
// ])
//     .then((result) => { console.log(result) })
//     .catch((err) => { console.log(err) });

// const user2 = new User({
//     name: "eve",
//     email: "eve@yahoo.in",
//     age: 48,
// });

// user2
//     .save()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err)
//     });
