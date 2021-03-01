require("dotenv").config();
const { PORT } = process.env;

const express = require("express");
const app = express();
app.listen(PORT || 8080, () => console.log("Server is listening..."));

const markets = require("./markets.json");
const { Search } = require("./bing");

app.get("/search", (req, res) => {
  const { query } = req.query;

  Search({ query })
    .then((data) => res.json(data))
    .catch(() => res.status(500).send("Internal Error"));
});
