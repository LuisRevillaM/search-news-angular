import angular from "angular";
import template from "./newsGrid.html";
import "./newsGrid.css";
export const newsGrid = angular.module("newsGrid", []);

newsGrid.component("newsGrid", {
  template,
  controller: function() {
    this.$onChanges = changes => {
      const isFetching = changes.status.currentValue === "fetching";
      const error = changes.status.currentValue === "error";

      this.loading = isFetching ? true : false;
      console.log(changes.status.currentValue, error);
      this.error = error;
    };
  },
  bindings: {
    news: "<",
    status: "<"
  }
});
