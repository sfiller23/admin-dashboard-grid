import mainGraph from "../../assets/main-graph.svg";
import GraphFooter from "./graphFooter/GraphFooter";
import GraphMap from "./graphMap/GraphMap";
import HistoryHeader from "./historyHeader/HistoryHeader";
import "./historySection.css";

const HistorySection = () => {
  return (
    <section id="history">
      <HistoryHeader />
      <GraphMap />
      <div id="history-main-graph-wrapper">
        <img id="history-main-graph" src={mainGraph} alt="graph" />
      </div>
      <hr />
      <GraphFooter />
    </section>
  );
};

export default HistorySection;
