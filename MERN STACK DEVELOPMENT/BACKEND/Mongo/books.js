const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Very low price for amazon selling."],
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate('68b7f7174c9bd70700bb83e2', { price: -500 }, {runValidators: true})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });

// let book1 = new Book({
//   title: "Biology",
//   author: "Waqas",
// });

// book1
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
