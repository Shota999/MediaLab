import "./subscribe.scss";
import { useState, useEffect } from "react";
import Social from "./Social";

const Subscribe = () => {
  const [social, setSocial] = useState(null);

  useEffect(() => {
    fetch("https://medialab-api.leavingstone.club/api/Social")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setSocial(res.data);
      });
  }, []);
  return (
    <>
      <div className="subscribe_container">
        <div className="subscribe">
          <h2>Subscribe</h2>
          <div className="join">
            <form>
              <label>
                Email
                <input placeholder="example@email.com" type="email" />
              </label>
              <button>Join</button>
            </form>
          </div>
        </div>
        <div className="social">{social && <Social social={social} />}</div>
      </div>
    </>
  );
};

export default Subscribe;
