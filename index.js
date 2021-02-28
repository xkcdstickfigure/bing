require("dotenv").config();

const { Search } = require("./bing");
Search("Archie Baer").then(console.log);
