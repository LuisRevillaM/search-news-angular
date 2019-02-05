import { services } from "../services/services.js";
import { newsContainer } from "../newsContainer/newsContainer.js";
import { searchBar } from "../searchBar/searchBar.js";
import { newsGrid } from "../newsGrid/newsGrid.js";
import { newsCard } from "../newsCard/newsCard.js";

import angular from "angular";
import template from "./app.html";

angular.module("app", [
  "services",
  "newsContainer",
  "searchBar",
  "newsGrid",
  "newsCard"
]);
