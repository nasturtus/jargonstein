import React from "react";
import "../Styles/NewsListings.css";

const NewsListings = props => {
  const jargon = props.jargonList[props.jargonIndex].jargon.toUpperCase();
  const explanation = props.jargonList[props.jargonIndex].explanation;
  const articles = props.articles;
  return (
    <div className="grid-item-jargon-explanation-newsListings">
      <p className="grid-item-jargon">{jargon}</p>
      <p className="grid-item-explanation">{explanation}</p>
      <div className="grid-item-newsListings">
        <p className="intro-line-to-listings">
          Explore this jargon further through these news articles...
        </p>

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
      <button className="newslistings-button" onClick={props.generateNewJargon}>
        Show Next
      </button>
    </div>
  );
};

export default NewsListings;
