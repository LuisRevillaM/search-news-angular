export default [
  "$http",
  function($http) {
    const apiKeyHeader = () => {
      return { "X-Api-Key": "7fa0c8e603034cadbb9f36b4f8c21c87" };
    };

    const buildUrl = (searchTerm, sortCriteria) => {
      const myParams = {
        language: null || "en",
        q: searchTerm || "love",
        sortBy: sortCriteria || ""
      };
      const url = new URL("https://newsapi.org/v2/everything");
      url.search = new URLSearchParams(myParams);
      return url;
    };

    const fetchNews = (searchTerm, sortCriteria) => {
      let prom = $http({
        method: "GET",
        headers: apiKeyHeader(),
        url: buildUrl(searchTerm, sortCriteria).href
      });

      return prom;
    };

    return {
      fetchNews
    };
  }
];
