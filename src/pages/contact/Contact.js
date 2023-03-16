import "../../App.scss";
import "./contact.scss";
import { useState, useEffect } from "react";
import Map from "../../components/map/Map";

const Contact = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch("https://medialab-api.leavingstone.club/api/Contact")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setContact(res.data);
        console.log(res);
      });
  }, []);

  if (!contact) {
    return (
      <>
        <div className="loadging">loadging</div>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <div className="title">
          <h2>Contact</h2>
        </div>
      </div>
      <div className="contact_container">
        <div className="left">
          <ul>
            <li>
              <div className="title">
                <svg
                  data-v-5e1eafcc=""
                  version="1.1"
                  viewBox="0 0 21 32"
                  className="svg-icon svg-fill"
                >
                  <path
                    pid="0"
                    _fill="#FC5146"
                    d="M10.5 13.334c-2.189 0-3.964-1.744-3.964-3.897 0-2.152 1.775-3.896 3.964-3.896 2.19 0 3.964 1.744 3.964 3.896 0 2.153-1.775 3.897-3.964 3.897M10.5 0C4.701 0 0 4.408 0 9.845 0 15.283 10.5 32 10.5 32S21 15.285 21 9.845C21 4.405 16.299 0 10.5 0"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span>Address</span>
              </div>
              <span>{contact.address}</span>
            </li>
            <li>
              <div className="title">
                <svg
                  data-v-5e1eafcc=""
                  version="1.1"
                  viewBox="0 0 29 29"
                  className="svg-icon svg-fill"
                >
                  <path
                    pid="0"
                    _fill="#FC5146"
                    fillRule="evenodd"
                    d="M5.977.003C2.077-.124-.44 4.425.064 8.089c1.132 9.223 11.826 19.71 20.884 20.847C24.471 29.44 29 26.914 29 22.998c-.252-.759-.63-1.011-.63-1.011s-4.654-2.527-5.535-3.159c-.755-.505-.755-.253-1.258 0-.503.126-2.642 2.906-3.27 3.285-2.517 1.516-12.96-8.97-11.45-11.497.378-.506 3.146-2.78 3.397-3.159.126-.505.378-.505-.125-1.39C9.625 5.183 6.983.634 6.983.634S6.858.255 5.977.003z"
                  ></path>
                </svg>
                <span>Phone</span>
              </div>
              <span>{contact.phone}</span>
            </li>
            <li>
              <div className="title">
                <svg
                  data-v-5e1eafcc=""
                  version="1.1"
                  viewBox="0 0 230.17 230.17"
                  className="svg-icon svg-fill"
                >
                  {" "}
                  <path d="M230,49.585c0-0.263,0.181-0.519,0.169-0.779l-70.24,67.68l70.156,65.518c0.041-0.468-0.085-0.94-0.085-1.418V49.585z"></path>
                  <path
                    d="M149.207,126.901l-28.674,27.588c-1.451,1.396-3.325,2.096-5.2,2.096c-1.836,0-3.672-0.67-5.113-2.013l-28.596-26.647
		L11.01,195.989c1.717,0.617,3.56,1.096,5.49,1.096h197.667c2.866,0,5.554-0.873,7.891-2.175L149.207,126.901z"
                  ></path>
                  <path
                    d="M115.251,138.757L222.447,35.496c-2.427-1.443-5.252-2.411-8.28-2.411H16.5c-3.943,0-7.556,1.531-10.37,3.866
		L115.251,138.757z"
                  ></path>
                  <path d="M0,52.1v128.484c0,1.475,0.339,2.897,0.707,4.256l69.738-67.156L0,52.1z"></path>
                </svg>
                <span>Email</span>
              </div>
              <span>{contact.phoneSecond}</span>
            </li>
          </ul>
        </div>
        <div className="right">{/* <Map /> */}</div>
      </div>
      <div className="container">
        <div className="title">
          <h2>write to us</h2>
        </div>
      </div>
      <form className="write">
        <div className="input">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
        </div>
        <textarea placeholder="Add your text here"></textarea>
        <div className="submit">
          <button>Send</button>
        </div>
      </form>
    </>
  );
};

export default Contact;
