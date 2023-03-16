import { Link } from "react-router-dom";

const Service = ({ services }) => {

  return (
    <>
      {services.map((services) => (
        <div className="services_container" key={services.id}>
          <Link to={`/services/${services.slug}`} className="img">
            <img src={services.image} alt="services_image" />
          </Link>
          <div className="information">
            <Link>{services.title}</Link>
            <p>{services.shortDescription}</p>
            <div className="more">
              <Link to={services.registrationUrl}>Register</Link>
              <Link to={services.more}>See more</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service;
