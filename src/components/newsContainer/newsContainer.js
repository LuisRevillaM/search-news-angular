import angular from "angular";
import template from "./newsContainer.html";

export const newsContainer = angular.module("newsContainer", []);

const controller = [
  "$http",
  "NewsService",
  function($http, NewsService) {
    this.state = {
      news: [],
      status: ""
    };
    this.setState = changes => {
      this.state = Object.assign({}, this.state, changes);
    };

    this.fetchNews = (searchTerm, sortCriteria) => {
      if (!searchTerm) {
        return;
      }
      this.setState({ status: "fetching" });
      if (!sortCriteria) {
        sortCriteria = "";
      }
      const promise = NewsService.fetchNews(searchTerm, sortCriteria);
      promise.then(res => {
        this.setState({ news: res.data.articles, status: "success" });
      });
    };
  }
];

newsContainer.component("newsContainer", {
  template,
  controller
});
