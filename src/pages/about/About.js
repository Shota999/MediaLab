import "./about.scss";
import "../../App.scss";
import { useState, useEffect } from "react";

const About = ({ path }) => {
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
          <>
            <div className="content">
              <div className="left" key={about.id}>
                <h3>{about.title}</h3>
                <div className="description" dangerouslySetInnerHTML={{ __html: about.description }} />
              </div>
              <div className="right">
                <img src={about.image} alt="missionImage" />
              </div>
            </div>
            <div className="content">
              <div className="right">
                <img src={about.imageSecond} alt="missionImage" />
              </div>
              <div className="left" key={about.id}>
                <h3>{about.titleSecond}</h3>
                <div className="description" dangerouslySetInnerHTML={{ __html: about.descriptionSecond }} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default About;
