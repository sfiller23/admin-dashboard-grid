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
      <img src={mainGraph} alt="graph" />
      <hr />
      <GraphFooter />
    </section>
  );
};

export default HistorySection;
