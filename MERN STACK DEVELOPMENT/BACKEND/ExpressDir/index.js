const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.get("/", (rea, res) => {
    res.send("This root");
})

app.get("/search", (req, res) => {
    console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("Nothing Searched");
    }
    res.send(`<h1>Search result for query: ${q} </h1>`)

});
