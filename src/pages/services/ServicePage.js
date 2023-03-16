import "./servicesPage.scss";
import "../../App.scss";
import "../about/about.scss";
import "../../components/services/services.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetcher } from "../../utils/fetcher";

const ServicePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const handler = async () => {
      const res = await fetcher("Service");
      setServices(res.data);
    };
    handler();
  }, []);

  return (
    <>
      <div className="container">
        <div className="title">
          <h2>Services</h2>
        </div>
      </div>
      <div className="services_container">
        <Link className="img" to={`/services/${services[2]?.slug}`}>
          <img src={services[2]?.image} alt="servicesImage" />
        </Link>
        <div className="information">
          <Link to={`/services/${services[2]?.slug}`}>Acceleration</Link>
          <p>{services[2]?.shortDescription}</p>
          <div className="more">
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScJpAaNLRdDwekZJ8e7QgqJL3qNTbVWmG84oBNBpAldip1kyA/viewform?usp=sf_link">
              Register
            </Link>
            <Link to={`/services/${services[2]?.slug}`}>See more</Link>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapperItems">
          {services.map((services ,i) => (
            <div className="wrapperItem" key={services.id || i}>
              <Link to={`/services/${services?.slug}`}>
                <img src={services.image} alt="" />
              </Link>
              <div className="information">
                <Link>{services.title}</Link>
                <p>{services.shortDescription}</p>
                <div className="more">
                  <Link to="https://docs.google.com/forms/d/e/1FAIpQLScJpAaNLRdDwekZJ8e7QgqJL3qNTbVWmG84oBNBpAldip1kyA/viewform?usp=sf_link">
                    Register
                  </Link>
                  <Link to={`/services/${services?.slug}`}>See more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicePage;
