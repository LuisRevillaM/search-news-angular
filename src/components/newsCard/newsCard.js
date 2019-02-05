import angular from "angular";

import template from "./newsCard.html";
import "./newsCard.css";
console.log("hreeeee");
export const newsCard = angular.module("newsCard", []);

newsCard.component("newsCard", {
  template,
  bindings: {
    info: "<"
  }
});
