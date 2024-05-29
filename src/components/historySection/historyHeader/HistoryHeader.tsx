import "./historyHeader.css";

const HistoryHeader = () => {
  return (
    <div id="history-header">
      <h1 className="section-title">Earning History</h1>
      <div id="history-button-group">
        <button>Week</button>
        <button className="active">Month</button>
        <button>Year</button>
      </div>
    </div>
  );
};

export default HistoryHeader;
