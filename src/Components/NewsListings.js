import React, { Component } from "react";
import "../Styles/NewsListings.css";

class NewsListings extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("In news listings / handle click");
    this.props.onClick();
  }

  render() {
    console.log("in news listings / render");
    console.log(this.props);
    const jargon = this.props.jargonList[
      this.props.jargonIndex
    ].jargon.toUpperCase();
    const explanation = this.props.jargonList[this.props.jargonIndex]
      .explanation;
    const articles = this.props.articles;
    console.log(jargon);
    console.log(explanation);
    console.log(articles);
    return (
      <div className="grid-item-jargon-explanation-newsListings">
        <caption className="grid-item-jargon">{jargon}</caption>
        <caption className="grid-item-explanation">{explanation}</caption>
        <p>
          Explore <span className="intro-line-to-listings">{jargon}</span>{" "}
          further through these news articles...
        </p>
        <div className="grid-item-newsListings">
          {articles.map((article, index, arr) => {
            return (
              <div>
                <li key={index} className="newslistings-article">
                  <a href={article.url} className="newslistings-link"target="_blank">
                    {article.title}
                  </a>{" "}
                  <span id="newslistings-span">{article.source.name}</span>
                </li>
              </div>
            );
          })}
        </div>
        <button className="newslistings-button" onClick={this.handleClick}>
          Show Next
        </button>
      </div>
    );
  }
}

export default NewsListings;
