import "./services.scss";
import Service from "./Service";
import { useState, useEffect } from "react";

const Services = () => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    fetch("https://medialab-api.leavingstone.club/api/Service/GetPinned")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setServices(res);
      });
  }, []);
  return (
    <>
      <div className="title">
        <h2>Services</h2>
      </div>
      <div className="service">
        {services && <Service services={services} />}
      </div>
    </>
  );
};

export default Services;
