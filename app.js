const fs = require("fs");
const express = require("express");

const app = express();

app.use("/", express.static(__dirname));
app.use("/controllers", express.static(__dirname + "/controllers"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/playlist", (req, res) => {
    res.json(req.body);
    console.log(req.body);
});

app.get("/playlist", (req, res) => {
    console.log(req.body);
});

app.listen(process.env.PORT || 8080, () => console.log("App hosted on http://localhost:8080"));