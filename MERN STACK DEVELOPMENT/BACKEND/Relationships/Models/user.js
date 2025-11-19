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
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
  let user1 = new User({
    username: "Junaid",
    addresses: {
      location: "Camercial area model town",
      city: "Bahawalput",
    },
  });
  user1.addresses.push({ location: "Mela gali", city: "Bahawalpur" });

  let result = await user1.save();
  console.log(result);
};

addUser();
