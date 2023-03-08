import "./news.scss";

const New = ({ news }) => {
  return (
    <>
      {news.map((news) => (
        <div className="news_container" key={news.id}>
          <a href="#">
            <img src={news.image} alt="news_image" />
          </a>
          <span>{news.createDate}</span>
        </div>
      ))}
    </>
  );
};

export default New;
