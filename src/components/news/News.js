import "./news.scss";
import { useState, useEffect } from "react";
import New from "./New";

const News = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch("https://medialab-api.leavingstone.club/api/News/GetPinned")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setNews(res);
      });
  }, []);

  return (
    <>
      <div className="title">
        <h2>news</h2>
      </div>
      <div className="news">{news && <New news={news} />}</div>
    </>
  );
};

export default News;
