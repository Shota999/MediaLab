const Service = ({ services }) => {
  return (
    <>
      {services.map((services) => (
        <div className="services_container" key={services.id}>
          <a href="#" className="img">
            <img src={services.image} alt="services_image" />
          </a>
          <div className="information">
            <h3>{services.title}</h3>
            <p>{services.shortDescription}</p>
            <div className="more">
              <a href={services.registrationUrl}>Register</a>
              <a href={services.more}>See more</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service;
