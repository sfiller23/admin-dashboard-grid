import Table from "./table/Table";
import "./tableSection.css";

const TableSection = () => {
  return (
    <section id="buy-sell-table-container">
      <h1 className="section-title">Buy & Sell History</h1>
      <Table />
    </section>
  );
};

export default TableSection;
