const { AZURE_SUBSCRIPTION_KEY } = process.env;
const BING_SEARCH_API = "https://api.bing.microsoft.com/v7.0";
const axios = require("axios");
const { stringify: qs } = require("query-string");

module.exports.Search = async ({
  query,
  count = 25,
  offset = 0,
  market = "en-US",
}) => {
  const { data } = await axios.get(
    `${BING_SEARCH_API}/search?${qs({
      q: query,
      mkt: market,
      count,
      offset,
    })}`,
    {
      headers: {
        "Ocp-Apim-Subscription-Key": AZURE_SUBSCRIPTION_KEY,
      },
    }
  );

  return {
    alteration: data.queryContext.alteredQuery && {
      query: data.queryContext.alteredQuery,
      override: data.queryContext.alterationOverrideQuery,
    },
    matches: data.webPages.totalEstimatedMatches,
    results: data.webPages.value.map((result) => ({
      title: result.name,
      description: result.snippet,
      url: result.url,
    })),
  };
};
