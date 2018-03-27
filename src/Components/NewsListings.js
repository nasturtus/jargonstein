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
        <p className="intro-line-to-listings">
          Explore {jargon} further through these news articles...
        </p>
        <div className="grid-item-newsListings">
          {articles.map((article, index, arr) => {
            return (
              <div>
                <li key={index} className="article">
                  <a href={article.url} target="_blank">
                    {article.title}
                  </a>{" "}
                  from <span>{article.source.name}</span>.
                </li>
              </div>
            );
          })}
        </div>
        <button className="button hover-float" onClick={this.handleClick}>
          Show Next
        </button>
      </div>
    );
  }
}

export default NewsListings;
