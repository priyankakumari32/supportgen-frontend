import "./DashboardCards.css";

function DashboardCards() {
  return (
    <div className="cards">

      <div className="card-box">
        <h2>128</h2>
        <p>Total Complaints</p>
      </div>

      <div className="card-box">
        <h2>45</h2>
        <p>Resolved</p>
      </div>

      <div className="card-box">
        <h2>67</h2>
        <p>In Progress</p>
      </div>

      <div className="card-box">
        <h2>16</h2>
        <p>Pending</p>
      </div>

    </div>
  );
}

export default DashboardCards;