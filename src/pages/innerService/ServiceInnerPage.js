import { useState, useEffect } from "react";
import { fetcher } from "../../utils/fetcher";
import { useParams } from 'react-router-dom';

const ServiceInnerPage = () => {
  const [services, setServices] = useState([]);

  const {slug} = useParams()
  console.log(slug)

  useEffect(() => {
    const handler = async () => {
      const res = await fetcher(`Service/${slug}`);
      console.log(res)
      setServices(res.data);
    };
    handler();
  }, []);

  return (
    <div className="innerPage">
      <h2>inner serive - {services.slug}</h2>
    </div>
  );
};

export default ServiceInnerPage;
