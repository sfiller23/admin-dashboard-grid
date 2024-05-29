import { FaCircle } from "react-icons/fa";
import "./graphMap.css";

const GraphMap = () => {
  return (
    <div id="graph-map">
      <div className="graph-map-details">
        <FaCircle color="#3183ff" />
        <h6>Energy saving</h6>
      </div>
      <div className="graph-map-details">
        <FaCircle color="#EA7465" />
        <h6>Production</h6>
      </div>
    </div>
  );
};

export default GraphMap;
