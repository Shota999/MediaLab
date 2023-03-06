import "./news.scss";

const New = ({ news }) => {
  return (
    <>
      {news.map((news) => (
        <div className="news_container" key={news.id}>
          <img src={news.image} alt="news_image" />
          <span>{news.createDate}</span>
        </div>
      ))}
    </>
  );
};

export default New;
