import angular from "angular";
import template from "./newsGrid.html";
import "./newsGrid.css";
export const newsGrid = angular.module("newsGrid", []);

newsGrid.component("newsGrid", {
  template,
  controller: function() {
    this.$onChanges = changes => {
      const isFetching = changes.status.currentValue === "fetching";
      this.loading = isFetching ? true : false;
    };
  },
  bindings: {
    news: "<",
    status: "<"
  }
});
