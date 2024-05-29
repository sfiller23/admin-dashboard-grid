import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import negGraph from "../../../assets/neg-graph.svg";
import "./graphFooter.css";

import posGraph from "../../../assets/pos-graph.svg";

const GraphFooter = () => {
  return (
    <div id="graph-footer">
      <div className="graph-details">
        <h6 className="graph-details-title">System production</h6>
        <div className="graph-details-container">
          <div>
            <BsCurrencyDollar /> <h6 className="amount">5,1268.64</h6>
          </div>
          <div className="diff-percent-container-up">
            <h6 className="percentage">32%</h6>
            <FaArrowUp style={{ width: "0.6rem" }} />
          </div>
        </div>
        <img className="graph-details-img" src={posGraph} alt="graph" />
      </div>
      <div className="graph-details">
        <h6 className="graph-details-title">Export Energy</h6>
        <div className="graph-details-container">
          <div>
            <BsCurrencyDollar /> <h6 className="amount">5,1268.64</h6>
          </div>
          <div className="diff-percent-container-down">
            <h6 className="percentage">16%</h6>
            <FaArrowDown style={{ width: "0.6rem" }} />
          </div>
        </div>
        <img className="graph-details-img" src={negGraph} alt="graph" />
      </div>
    </div>
  );
};

export default GraphFooter;
