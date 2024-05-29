import subGraph from "../../assets/sub-graph.svg";
import "./revenueSection.css";

const RevenueSection = () => {
  return (
    <section id="total-revenue">
      <h1 className="section-title">Total Revenue</h1>
      <img src={subGraph} alt="graph" />
      <div className="revenue-details">
        <h6>Rate</h6>
        <h6 className="value">6.36522 BNB = 1 ETH</h6>
      </div>
      <hr />
      <div className="revenue-details">
        <h6>Slippage Tolerance</h6>
        <h6 className="value">0.56%</h6>
      </div>
      <hr />
      <div className="revenue-details">
        <h6>Liquidity Provider Fee</h6>
        <h6 className="value">0.023652 BNB</h6>
      </div>
    </section>
  );
};

export default RevenueSection;
