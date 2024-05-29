import FormSection from "../components/formSection/FormSection";
import Header from "../components/header/Header";
import HistorySection from "../components/historySection/HistorySection";
import RevenueSection from "../components/revenueSection/RevenueSection";
import SideNav from "../components/sideNav/SideNav";
import TableSection from "../components/tableSection/TableSection";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div id="main-wrapper">
      <SideNav />
      <div id="main-content">
        <Header />
        <main>
          <HistorySection />
          <RevenueSection />
          <TableSection />
          <FormSection />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
