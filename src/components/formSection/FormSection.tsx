import "./formSection.css";

const FormSection = () => {
  return (
    <section id="buy-sell-form-container">
      <form action="">
        <h1 className="section-title">Buy & Sell</h1>
        <div id="switch-container">
          <button id="buy">Buy</button>
          <button id="sell">Sell</button>
        </div>
        <div id="inputs-container">
          <div className="input-wrapper">
            <label className="input-label" htmlFor="currency">
              Choose Currency
            </label>
            <select className="input" id="currency"></select>
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="amount">
              Amount
            </label>
            <input className="input" type="number" id="amount" />
          </div>
          <button id="submit-button">Confirm</button>
        </div>
      </form>
    </section>
  );
};

export default FormSection;
