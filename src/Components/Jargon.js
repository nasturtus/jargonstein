import React, { Component } from "react";
import NewsListings from "./NewsListings";

// seed-data
import jargonList from "../seed-data/jargonList";
import newsSources from "../seed-data/newsSources";

import "../Styles/Jargon.css";

class Jargon extends Component {
  constructor() {
    super();
    this.state = {
      jargonList: jargonList,
      index: 0,
      articles: [],
      loaded: false
    };
    this.generateNewJargon = this.generateNewJargon.bind(this);
  }

  componentDidMount() {
    this.generateNewJargon();
  }

  render() {
    if (this.state.loaded) {
      return (
        <NewsListings
          jargonList={this.state.jargonList}
          jargonIndex={this.state.index}
          articles={this.state.articles}
          generateNewJargon={this.generateNewJargon}
        />
      );
    }
    return (
      <img src="Assets/loading-icon.gif" alt="loading" className="loader" />
    );
  }

  generateNewJargon() {
    const index = (this.state.index + 1) % this.state.jargonList.length;
    const jargon = this.state.jargonList[index].jargon.toUpperCase();
    const apiEndpoint = this.buildFetchQuery(jargon);

    this.setState({ loaded: false });
    this.fetchArticles(apiEndpoint, index);
  }

  buildFetchQuery(jargon) {
    let searchJargon = jargon + "&";
    const url = "https://newsapi.org/v2/everything?q=";
    const apiKey = "1ac76a8ce51442738b51ba627fd92210";
    const pageSize = "5&";
    const sources = newsSources.join(",") + "&";

    const apiEndpoint =
      url +
      searchJargon +
      "from=2010-01-01&" +
      "sortBy=relevancy&" +
      "pageSize=" +
      pageSize +
      "sources=" +
      sources +
      "apiKey=" +
      apiKey;

    return apiEndpoint;
  }

  fetchArticles(apiEndpoint, index) {
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(json => json.articles)
      .then(articles =>
        this.setState({
          jargonList: this.state.jargonList,
          index: index,
          articles: articles,
          loaded: true
        })
      )
      .catch(error => console.log(error));
  }
}

export default Jargon;
