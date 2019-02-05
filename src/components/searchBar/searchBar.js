import angular from "angular";
import template from "./searchBar.html";
import template2 from "./dropDown.html";
import "./searchBar.css";
import down from "../../assets/down.png";

export const searchBar = angular.module("searchBar", []);

const controller = function() {
  this.state = {
    searchTerm: "",
    sortCriteria: "none"
  };
  this.sortArticles = sortCriteria => {
    this.state.sortCriteria = sortCriteria;
    this.onSearch({ searchTerm: this.state.searchTerm, sortCriteria });
  };

  this.onEnter = event => {
    if (event.which === 13) {
      this.onSearch({
        searchTerm: this.state.searchTerm,
        sortCriteria: this.state.sortCriteria
      });
    }
  };
};

searchBar.component("searchBar", {
  template,
  controller,
  bindings: {
    onSearch: "&"
  }
});

searchBar.component("dropDown", {
  template: template2,
  controller: function() {
    this.criteria = "none";
    this.allCriterias = ["publishedAt", "relevancy", "popularity", "none"];
    this.isOpen = false;
    this.sortCriteria = {
      publishedAt: "Date",
      popularity: "Popularity",
      relevancy: "Relevance",
      none: "None"
    };
    this.content =
      this.criteria === "none"
        ? "Sort Articles"
        : this.sortCriteria[this.criteria];
    this.sort = criteria => {
      this.content =
        criteria === "none" ? "Sort Articles" : this.sortCriteria[criteria];
      this.sortArticles({ sortCriteria: criteria });
    };
    this.down = down;
    this.toggle = () => {
      this.isOpen = !this.isOpen;
    };
  },
  bindings: {
    criteria: "=",
    sortArticles: "&"
  }
});
