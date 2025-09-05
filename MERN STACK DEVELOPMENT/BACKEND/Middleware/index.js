const express = require("express");
const app = express();
const ExpressError = require("./ExpressError.js");

// // logger - morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toDateString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next()
// })

// app.use((req, res, next) => {
//   console.log("Hi, I am middleware");
//   next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     return next();
//     console.log("This is after middle ware...")
// })

// app.use("/random", (req, res, next) => {
//   console.log("Hi, I am only for random");
//   next();
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!");
};

app.use("/api", checkToken, (rea, res, next) => {
  next();
});

app.get("/api", (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("working root");
});

app.get("/random", (req, res) => {
  res.send("working random");
  console.log("Random");
});

app.get("/err", (req, res) => {
  abc = abc;
});



app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is Forbidden")
})

app.use((err, req, res, next) => {
  console.log("----- error caught -------");
  let {status=500, message="Some error occure"} = err;
  res.status(status).send(message);
});

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen("8080", () => {
  console.log("Server listening to the port 8080");
});
