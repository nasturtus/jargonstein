import React, { Component } from "react";
import "../Styles/NewsListings.css";

class NewsListings extends Component {
  render() {
    const jargon = this.props.jargonList[
      this.props.jargonIndex
    ].jargon.toUpperCase();
    const explanation = this.props.jargonList[this.props.jargonIndex]
      .explanation;
    const articles = this.props.articles;
    return (
      <div className="grid-item-jargon-explanation-newsListings">
        <p className="grid-item-jargon">{jargon}</p>
        <p className="grid-item-explanation">{explanation}</p>
        <p className="intro-line-to-listings">
          Explore this jargon further through these news articles...
        </p>
        <div className="grid-item-newsListings">
          {articles.map((article, index, arr) => {
            return (
              <div key={index}>
                <li className="newslistings-article">
                  <a
                    href={article.url}
                    className="newslistings-link"
                    target="_blank"
                  >
                    {article.title}
                  </a>{" "}
                  <span id="newslistings-span">{article.source.name}</span>
                </li>
              </div>
            );
          })}
        </div>
        <button
          className="newslistings-button"
          onClick={this.props.generateNewJargon}
        >
          Show Next
        </button>
      </div>
    );
  }
}

export default NewsListings;
