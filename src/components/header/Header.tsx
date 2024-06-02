import { IoMdArrowDropdown } from "react-icons/io";
import notifications from "../../assets/notifications.svg";
import profilePlaceHolder from "../../assets/profile-placeholder.svg";
import "./header.css";
const Header = () => {
  return (
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
        <img id="notifications-img" src={notifications} alt="notifications" />
      </div>
    </header>
  );
};

export default Header;
