require("dotenv").config();

const markets = require("./markets.json");

const { Search } = require("./bing");
Search({ query: "AllesHQ", market: markets["GB"] }).then(console.log);
