const express = require("express");

require("./config/db");

const treeRouter = require("./routes/tree.router");

const app = express();

app.use(express.json());

app.use("/", treeRouter);

app.get("/", (req, res) => {
    res.send("Tree Shop API");
});

module.exports = app;