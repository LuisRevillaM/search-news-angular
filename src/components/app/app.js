import angular from "angular";
import { services } from "../services/services.js";
import { newsContainer } from "../newsContainer/newsContainer.js";
import { searchBar } from "../searchBar/searchBar.js";
import { newsGrid } from "../newsGrid/newsGrid.js";
import { newsCard } from "../newsCard/newsCard.js";

angular.module("app", [
  "services",
  "newsContainer",
  "searchBar",
  "newsGrid",
  "newsCard"
]);
