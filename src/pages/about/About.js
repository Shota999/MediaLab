import "./about.scss";
import "../../App.scss";
import { useState, useEffect } from "react";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("https://medialab-api.leavingstone.club/api/About")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setAbout(res.data);
      });
  }, []);
  
  return (
    <>
      <div className="container">
        <div className="title">
          <h2>about us</h2>
        </div>
        {about && (
          <div className="content">
            <div className="left" key={about.id}>
              <h3>{about.title}</h3>
              <p>{about.description}</p>
            </div>
            <div className="right">
              <img src={about.image} alt="missionImage" />
            </div>
          </div>
        )}
        {about && (
          <div className="content">
            <div className="right">
              <img src={about.imageSecond} alt="missionImage" />
            </div>
            <div className="left" key={about.id}>
              <h3>{about.titleSecond}</h3>
              <p>{about.descriptionSecond}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default About;
