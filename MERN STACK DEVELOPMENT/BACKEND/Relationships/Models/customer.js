const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection successfull..."))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  order: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("Pre Middleware");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.order.length) {
    let result = await Order.deleteMany({ _id: { $in: customer.order } });
    console.log(result);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// Functions
// const findCustomer = async () => {
//   const result = await Customer.find({}).populate("order");
//   console.log(result[0]);
// };

// findCustomer();

const addCust = async () => {
  let newCust = new Customer({
    name: "Hamid Raza",
  });

  let newOrder = new Order({
    item: "Burger",
    price: 2500,
  });

  newCust.order.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("Added new Customer");
};

// addCust();

const delCust = async () => {
  let data = await Customer.findByIdAndDelete("68c16759b82a2cae537e1078");
  console.log(data);
};

delCust();
