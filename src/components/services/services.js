import angular from "angular";
import newsService from "./newsService.js";

export const services = angular.module("services", []);

services.factory("NewsService", newsService);
