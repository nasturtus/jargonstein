import React from "react";
import PropTypes from 'prop-types';

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
            // I think this component could be more readable if lines 22-34 (i.e. the Article) were extracted into its own component
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

// nice use of propTypes validation!
NewsListings.propTypes = {
  jargonList: PropTypes.array.isRequired,
  jargonIndex: PropTypes.number.isRequired,
  articles: PropTypes.array.isRequired,
  generateNewJargon: PropTypes.func.isRequired
};

export default NewsListings;
