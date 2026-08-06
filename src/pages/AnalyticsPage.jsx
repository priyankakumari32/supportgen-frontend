import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import "./AnalyticsPage.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function AnalyticsPage({ complaints }) {
  const totalComplaints = complaints.length;

  const pendingCount = complaints.filter(
    (c) => c.status === "Pending"
  ).length;

  const resolvedCount = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  const priorityCount = {
    High: 0,
    Medium: 0,
    Low: 0,
  };

  const categoryCount = {};

  complaints.forEach((complaint) => {
    if (priorityCount[complaint.priority] !== undefined) {
      priorityCount[complaint.priority]++;
    }

    categoryCount[complaint.category] =
      (categoryCount[complaint.category] || 0) + 1;
  });

  const priorityData = {
    labels: Object.keys(priorityCount),
    datasets: [
      {
        label: "Complaints",
        data: Object.values(priorityCount),
        backgroundColor: [
          "#ef4444",
          "#f59e0b",
          "#22c55e",
        ],
      },
    ],
  };

  const categoryData = {
    labels: Object.keys(categoryCount),
    datasets: [
      {
        data: Object.values(categoryCount),
        backgroundColor: [
          "#2563eb",
          "#60a5fa",
          "#93c5fd",
          "#bfdbfe",
          "#1d4ed8",
          "#3b82f6",
        ],
      },
    ],
  };

  return (
    <section className="page-shell">
      <div className="hero-panel compact">
        <div>
          <p className="hero-kicker">Complaint analytics</p>
          <h2>Performance Insights</h2>
          <p>Live analytics generated from your complaint database.</p>
        </div>
      </div>

      <div className="stats-row">
        <div>
          <strong>{totalComplaints}</strong>
          <span>Total Complaints</span>
        </div>

        <div>
          <strong>{pendingCount}</strong>
          <span>Pending</span>
        </div>

        <div>
          <strong>{resolvedCount}</strong>
          <span>Resolved</span>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="panel-card chart-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Priority</p>
              <h3>Complaint Priority Distribution</h3>
            </div>
          </div>

          <Bar
            data={priorityData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>

        <div className="panel-card chart-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Category</p>
              <h3>Complaint Categories</h3>
            </div>
          </div>

          <Doughnut
            data={categoryData}
            options={{
              responsive: true,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default AnalyticsPage;