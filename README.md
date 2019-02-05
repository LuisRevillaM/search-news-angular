# Search News

This repository implements a website that fetches news from the [News API](https://newsapi.org/) and displays them to the user. You can try a deployed version [here](https://kind-poitras-3fc0f5.netlify.com/).

## Prerequisites

Node is required to run this project in your system.

## Run locally

Clone the repository. From its root directory, run

```sh
npm install
```

Then you can start the development server with

```sh
npm start
```

## Implementation

This website consists of a root, HTML document and JavaScript (Angular 1.7) code to generate the view layer.

**Angular** components have been used to mimic the **React** [implementation](https://github.com/luisrevillam/search-news/tree/component-state/docs) of this website.

Each component belongs to a separate angular module, registered in the global `app` module.

```
angular.module("app", [
  "services",
  "newsContainer",
  "searchBar",
  "newsGrid",
  "newsCard"
]);
```

The `newsContainer` component is the root of our app tree. Its controller holds logic that interacts with the `NewsService` to fetch news, stores the response data and keeps track of the state of the request. This logic/data/state is shared through component bindings to the `searchBar` and `newsGrid` components;

```HTML
<div>
  <search-bar on-search="$ctrl.fetchNews(searchTerm, sortCriteria)"></search-bar
  ><news-grid news="$ctrl.state.news" status="$ctrl.state.status"></news-grid>
</div>
```
