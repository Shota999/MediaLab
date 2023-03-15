import "./servicesPage.scss";
import "../../App.scss";
import "../about/about.scss";
import "../../components/services/services.scss";
import { Link } from "react-router-dom";

const ServicePage = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <h2>Services</h2>
        </div>
      </div>
      <div className="services_container">
        <Link className="img" to="/">
          <img
            src="https://static.medialab.ge/you-x-ventures-Oalh2MojUuk-unsplash-d58726ba.jpg"
            alt="servicesImage"
          />
        </Link>
        <div className="information">
          <Link>Acceleration</Link>
          <p>
            Medialab offers an individual acceleration program for startups
            working on products related to the communication industry...
          </p>
          <div class="more">
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScJpAaNLRdDwekZJ8e7QgqJL3qNTbVWmG84oBNBpAldip1kyA/viewform?usp=sf_link">
              Register
            </Link>
            <Link>See more</Link>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapperItems">
          <div className="wrapperItem">
            <Link>
              <img
                src="https://static.medialab.ge/ideadromi-2021-3-9b4b19b9.jpg"
                alt=""
              />
            </Link>
            <div className="information">
              <Link>Acceleration</Link>
              <p>
                Medialab offers an individual acceleration program for startups
                working on products related to the communication industry...
              </p>
              <div className="more">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLScJpAaNLRdDwekZJ8e7QgqJL3qNTbVWmG84oBNBpAldip1kyA/viewform?usp=sf_link">
                  Register
                </Link>
                <Link>See more</Link>
              </div>
            </div>
          </div>
          <div className="wrapperItem">
            <Link>
              <img
                src="https://static.medialab.ge/ideadromi-2021-3-9b4b19b9.jpg"
                alt=""
              />
            </Link>
            <div className="information">
              <Link>Acceleration</Link>
              <p>
                Medialab offers an individual acceleration program for startups
                working on products related to the communication industry...
              </p>
              <div class="more">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLScJpAaNLRdDwekZJ8e7QgqJL3qNTbVWmG84oBNBpAldip1kyA/viewform?usp=sf_link">
                  Register
                </Link>
                <Link>See more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
