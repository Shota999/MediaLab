import "./services.scss";
import Service from "./Service";
import { useState, useEffect } from "react";
import { fetcher } from "../../utils/fetcher";

const Services = () => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    const handler = async () => {
      const res = await fetcher("Service/GetPinned");
      setServices(res);
    };
    handler();
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
