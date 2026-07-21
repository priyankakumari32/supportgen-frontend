import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./AnalyticsPage.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const trendData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Resolved tickets",
      data: [18, 24, 22, 31, 28, 35, 40],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37, 99, 235, 0.2)",
      tension: 0.35,
      fill: true,
    },
  ],
};

const issueData = {
  labels: ["Billing", "Delivery", "Login", "Product"],
  datasets: [
    {
      data: [32, 24, 18, 26],
      backgroundColor: ["#2563eb", "#60a5fa", "#93c5fd", "#bfdbfe"],
    },
  ],
};

function AnalyticsPage() {
  return (
    <section className="page-shell">
      <div className="hero-panel compact">
        <div>
          <p className="hero-kicker">Complaint analytics</p>
          <h2>Performance insights</h2>
          <p>Review the health of your support queue with live trend insights.</p>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="panel-card chart-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Weekly trend</p>
              <h3>Resolution velocity</h3>
            </div>
          </div>
          <Line data={trendData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>

        <div className="panel-card chart-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Issue mix</p>
              <h3>Top complaint types</h3>
            </div>
          </div>
          <Doughnut data={issueData} options={{ responsive: true }} />
        </div>
      </div>

      <div className="panel-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Snapshot</p>
            <h3>Customer experience summary</h3>
          </div>
        </div>

        <div className="stats-row">
          <div>
            <strong>94%</strong>
            <span>First response SLA</span>
          </div>
          <div>
            <strong>4.8/5</strong>
            <span>Customer satisfaction</span>
          </div>
          <div>
            <strong>12 min</strong>
            <span>Avg. resolution time</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnalyticsPage;
