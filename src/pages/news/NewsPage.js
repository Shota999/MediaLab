import "../../App.scss";
import "./newsPage.scss";
import { useState, useEffect } from "react";

const NewsPage = () => {
  const [newsList, setNewsList] = useState(null);

  useEffect(() => {
    fetch(
      "https://medialab-api.leavingstone.club/api/News?page=1&perPage=15&pinnedToMain=false&pinned=false&withoutPinned=true&day=0&month=0&year=0&currentId=0&orderByDesc=true&enableRangeSelecting=false&noPinned=true&fromApi=false"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setNewsList(res.data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="title">
          <h2>News</h2>
        </div>
      </div>
      <div className="news_list">
        <div className="news_container">
          <img src={newsList.image} alt="newsList_image" />
          <span>{newsList.createDate}</span>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
