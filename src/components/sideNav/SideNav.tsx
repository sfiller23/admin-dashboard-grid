import logo from "../../assets/logo.svg";
import nav1 from "../../assets/nav1.svg";
import nav2 from "../../assets/nav2.svg";
import nav3 from "../../assets/nav3.svg";
import nav4 from "../../assets/nav4.svg";
import nav5 from "../../assets/nav5.svg";
import nav6 from "../../assets/nav6.svg";
import "./sideNav.css";

const SideNav = () => {
  return (
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
  );
};

export default SideNav;
