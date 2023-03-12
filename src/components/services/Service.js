import { Link } from "react-router-dom";

const Service = ({ services }) => {
  return (
    <>
      {services.map((services) => (
        <div className="services_container" key={services.id}>
          <Link to="#" className="img">
            <img src={services.image} alt="services_image" />
          </Link>
          <div className="information">
            <Link>{services.title}</Link>
            <p>{services.shortDescription}</p>
            <div className="more">
              <Link href={services.registrationUrl}>Register</Link>
              <Link href={services.more}>See more</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service;
