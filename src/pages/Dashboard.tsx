import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowDown, FaArrowUp, FaCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../assets/logo.svg";
import mainGraph from "../assets/main-graph.svg";
import nav1 from "../assets/nav1.svg";
import nav2 from "../assets/nav2.svg";
import nav3 from "../assets/nav3.svg";
import nav4 from "../assets/nav4.svg";
import nav5 from "../assets/nav5.svg";
import nav6 from "../assets/nav6.svg";
import negGraph from "../assets/neg-graph.svg";
import notifications from "../assets/notifications.svg";
import posGraph from "../assets/pos-graph.svg";
import profilePlaceHolder from "../assets/profile-placeholder.svg";
import subGraph from "../assets/sub-graph.svg";
import tableRow1 from "../assets/table-row1.svg";
import tableRow2 from "../assets/table-row2.svg";
import tableRow3 from "../assets/table-row3.svg";
import tableRow4 from "../assets/table-row4.svg";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div id="main-wrapper">
      <aside>
        <div id="logo-container">
          <img id="logo-img" src={logo} alt="logo" />
          <h1 id="logo-title">SYNC</h1>
        </div>
        <h1>MENU</h1>
        <ul>
          <li className="nav-item">
            <img src={nav1} alt="nav" />
            <h2>Dashboard</h2>
          </li>
          <li className="nav-item">
            <img src={nav2} alt="nav" />
            <h2>Calendar</h2>
          </li>
          <li className="nav-item">
            <img src={nav3} alt="nav" />
            <h2>Profile</h2>
          </li>
          <li className="nav-item">
            <img src={nav4} alt="nav" />
            <h2>Task</h2>
          </li>
          <li className="nav-item">
            <img src={nav5} alt="nav" />
            <h2>Forms</h2>
          </li>
          <li className="nav-item">
            <img src={nav6} alt="nav" />
            <h2>Tables</h2>
          </li>
        </ul>
      </aside>
      <div id="main-content">
        <header>
          <div id="header-title">
            <h1>Wellcome back, Gracetrans</h1>
            <h6>Here what’s happening with your store today</h6>
          </div>
          <div id="profile-container">
            <img id="profile-img" src={profilePlaceHolder} alt="profile" />
            <h2>Gracetrans</h2>
            <h6>admin</h6>
            <IoMdArrowDropdown id="profile-down-arrow" />
          </div>
          <img src={notifications} alt="notifications" />
        </header>
        <main>
          <section id="history">
            <div id="history-header">
              <h1 className="section-title">Earning History</h1>
              <div id="history-button-group">
                <button>Week</button>
                <button className="active">Month</button>
                <button>Year</button>
              </div>
            </div>
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
            <img id="main-graph-img" src={mainGraph} alt="graph" />
            <hr />
            <div id="graph-footer">
              <div className="graph-details">
                <h6 className="graph-details-title">System production</h6>
                <div className="graph-details-details">
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
                <div className="graph-details-details">
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
          </section>
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
          <section id="buy-sell-table-container">
            <h1 className="section-title">Buy & Sell</h1>
            <table>
              <thead>
                <tr>
                  <th>Billing to</th>
                  <th>Amount</th>
                  <th>Progress</th>
                  <th>Payment Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="first-table-col">
                    <img src={tableRow1} alt="table-img" />
                    <h4>Venus PRO</h4>
                    <h4>By Esthera Jackson</h4>
                  </td>
                  <td>2.458</td>
                  <td>17.5%</td>
                  <td>24.Jan.2021</td>
                </tr>
                <tr>
                  <td className="first-table-col">
                    <img src={tableRow2} alt="table-img" />
                    <h4>Uranus Kit</h4>
                    <h4>By Nick Wilson</h4>
                  </td>
                  <td>1.485</td>
                  <td>10.8%</td>
                  <td>12.Jun.2021</td>
                </tr>
                <tr>
                  <td className="first-table-col">
                    <img src={tableRow3} alt="table-img" />
                    <h4>Swipe Circles</h4>
                    <h4>By Peter Will</h4>
                  </td>
                  <td>1.024</td>
                  <td>21.3%</td>
                  <td>5.Jan.2021</td>
                </tr>
                <tr>
                  <td className="first-table-col">
                    <img src={tableRow4} alt="table-img" />
                    <h4>Mesh Gradients</h4>
                    <h4>By Will Smith</h4>
                  </td>
                  <td>858</td>
                  <td>31.5%</td>
                  <td>7.Mar.2021</td>
                </tr>
              </tbody>
            </table>
          </section>
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
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
