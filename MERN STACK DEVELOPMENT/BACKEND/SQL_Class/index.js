const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "P@ssw0rd",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Home Route
app.get("/", (req,res)=>{
  let q = `SELECT  count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", {count});
    });
  } catch (err) {
    res.send("Some error on DB");
  }
});

// Show route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showusers.ejs", {users});
    });
  } catch (err) {
    res.send("Some error on DB");
  }
});

// Add  user route
app.get("/user/add", (req, res) => {
  res.render("add.ejs");
});
app.post("/user/add", (req, res) => {
  let {username, email, password} = req.body;
  let id = uuidv4();
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    })
  } catch (err) {
    res.send("Some error occure")
  }
});

// Edit route
app.get("/user/:id/edit", (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", {user});
    });
  } catch (err) {
    res.send("Some error on DB");
  }
});

// Update (DB) Route
app.patch("/user/:id", (req, res)  => {
  let {id} = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("WRONG Password");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        try {
          connection.query(q2, (err, result) => {
            if (err) throw err;
            res.redirect("/user");
          })
        } catch (err) {
          res.send("Some error on DB");
        }
      }
    });
  } catch (err) {
    res.send("Some error on DB");
  }
});

// Delete route
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/user/:id", (req, res) => {
  let {id} = req.params;
  let {password} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (password != user.password) {
        res.send("WRONG Password");
      } else {
        let q2 = `DELETE FROM user WHERE id = '${id}'`;
        try {
          connection.query(q2, (err, result) => {
            if (err) throw err;
            res.redirect("/user");
          })
        } catch (err) {
          res.send("Some error occured");
        }
      }
    })
  } catch (err) {
    res.send("some error occured")
  }
})



app.listen("8080", ()=>{
  console.log("Server is listening to port 8080...")
});