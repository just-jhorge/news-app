import React, { useState, useEffect } from "react";
import NewsItem from "../components/NewsItem";
import axios from "axios";
import _ from "lodash";

const Business = () => {
  const NEWSAPI = "fa21c0eb075a4b28bfc19320dad77ff6";
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=business&apiKey=${NEWSAPI}`
      );
      setArticles(response.data.articles);
      console.log(response.data.articles);
    };

    getArticles();
  }, []);

  return (
    <div className="w-full md:w-[85%] mx-auto flex flex-wrap gap-5 md:gap-10 mt-20">
      {articles &&
        articles.map((article) => (
          <NewsItem
            date={`${new Date(article.publishedAt)
              .toLocaleString("default", { month: "short" })
              .toUpperCase()}, ${new Date(article.publishedAt).getFullYear()}`}
            urlToImage={article.urlToImage}
            description={_.truncate(article.description, { length: 60 })}
            title={article.title}
            articleLink={article.url}
            key={article.url}
          />
        ))}
    </div>
  );
};

export default Business;
