import { useState } from "react";
import "./App.css";
import Article from "./Article";

function App() {
  const ARTICLES = [
    {
      title: "A message to our customers",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      title: "Alphabet earnings",
      upvotes: 22,
      date: "2019-11-23",
    },
    {
      title: "Artificial Mountains",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      title: "Scaling to 100k Users",
      upvotes: 72,
      date: "2019-01-21",
    },
    {
      title: "the Emu War",
      upvotes: 24,
      date: "2019-10-21",
    },
    {
      title: "What's SAP",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      title: "Simple text editor has 15k monthly users",
      upvotes: 7,
      date: "2010-12-31",
    },
  ];

  const [ArticleList, setArticleList] = useState(ARTICLES);

  const handleClickButtonMostUpvoted = () => {
    const copy = [...ArticleList];
    const mostUpvoted = copy.sort((a, b) => b.upvotes - a.upvotes);
    console.log("mostUpvoted", mostUpvoted);
    setArticleList(mostUpvoted);
  };

  const handleClickButtonMostRecent = () => {
    const copy = [...ArticleList];
    const dateData = copy.sort((a, b) => new Date(b.date) - new Date(a.date));
    setArticleList(dateData);
  };

  return (
    <>
      <h4>React Shorting Article</h4>
      <div>
        <h5>Sort By</h5>
        <button onClick={handleClickButtonMostUpvoted}>Most Upvoted</button>
        <button onClick={handleClickButtonMostRecent}>Most Recent</button>
      </div>
      <Article articles={ArticleList} />
    </>
  );
}

export default App;
