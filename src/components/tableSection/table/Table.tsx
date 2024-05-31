import tableRow1 from "../../../assets/table-row1.svg";
import tableRow2 from "../../../assets/table-row2.svg";
import tableRow3 from "../../../assets/table-row3.svg";
import tableRow4 from "../../../assets/table-row4.svg";
import "./table.css";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Billing to</th>
          <th className="number">Amount</th>
          <th className="number">Progress</th>
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
          <td className="number">2.458</td>
          <td className="number">17.5%</td>
          <td>24.Jan.2021</td>
        </tr>
        <tr>
          <td className="first-table-col">
            <img src={tableRow2} alt="table-img" />
            <h4>Uranus Kit</h4>
            <h4>By Nick Wilson</h4>
          </td>
          <td className="number">1.485</td>
          <td className="number">10.8%</td>
          <td>12.Jun.2021</td>
        </tr>
        <tr>
          <td className="first-table-col">
            <img src={tableRow3} alt="table-img" />
            <h4>Swipe Circles</h4>
            <h4>By Peter Will</h4>
          </td>
          <td className="number">1.024</td>
          <td className="number">21.3%</td>
          <td>5.Jan.2021</td>
        </tr>
        <tr>
          <td className="first-table-col">
            <img src={tableRow4} alt="table-img" />
            <h4>Mesh Gradients</h4>
            <h4>By Will Smith</h4>
          </td>
          <td className="number">858</td>
          <td className="number">31.5%</td>
          <td>7.Mar.2021</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
