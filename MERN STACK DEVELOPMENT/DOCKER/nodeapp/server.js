const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const port = 3030;
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const MONGO_URL = "mongodb://delta_admin:delta_password@localhost:27017";
const client = new MongoClient(MONGO_URL);

// Get all users
app.get("/getUsers", async (req, res) => {
  await client.connect(URL);
  console.log("Connected successful to server");

  const db = client.db("my-sample-db");
  const data = await db.collection("users").find({}).toArray();

  client.close();
  res.send(data);
});

// POST new user
app.post("/addUser", async (req, res) => {
  const userObj = req.body;
  await client.connect(URL);
  console.log("Connected succesfully to the server");

  const db = client.db("my-sample-db");
  const data = await db.collection("users").insertOne(userObj);
  console.log(data);
  console.log("Data inserted to db");
  client.close();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
