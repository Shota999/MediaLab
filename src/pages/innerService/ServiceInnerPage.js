import { useParams } from "react-router-dom";

const ServiceInnerPage = () => {
  const { id } = useParams();
  
  return (
    <div className="innerPage">
      <h2>inner serive - {id}</h2>
    </div>
  );
};

export default ServiceInnerPage;
