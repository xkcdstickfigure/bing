const { AZURE_SUBSCRIPTION_KEY } = process.env;
const BING_SEARCH_API = "https://api.bing.microsoft.com/v7.0";
const axios = require("axios");

module.exports.Search = async (query) =>
  (
    await axios.get(
      `${BING_SEARCH_API}/search?q=${encodeURIComponent(query)}`,
      {
        headers: {
          "Ocp-Apim-Subscription-Key": AZURE_SUBSCRIPTION_KEY,
        },
      }
    )
  ).data;
