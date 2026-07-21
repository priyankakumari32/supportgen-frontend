import "./DashboardCards.css";
import {
  FaClipboardList,
  FaCheckCircle,
  FaSpinner,
  FaExclamationTriangle,
} from "react-icons/fa";

function DashboardCards({ complaints }) {
  const safeComplaints = Array.isArray(complaints) ? complaints : [];
  const total = safeComplaints.length;

  const resolved = safeComplaints.filter(
    (c) => String(c.status || "").toLowerCase() === "resolved"
  ).length;

  const progress = safeComplaints.filter(
    (c) => String(c.status || "").toLowerCase() === "in progress"
  ).length;

  const pending = safeComplaints.filter(
    (c) => String(c.status || "").toLowerCase() === "pending"
  ).length;

  const cards = [
    { label: "Total Complaints", value: total, tone: "purple", detail: "Across all channels", icon: FaClipboardList },
    { label: "Resolved", value: resolved, tone: "green", detail: "Completed this week", icon: FaCheckCircle },
    { label: "In Progress", value: progress, tone: "amber", detail: "Actively being handled", icon: FaSpinner },
    { label: "Pending", value: pending, tone: "red", detail: "Needs follow-up", icon: FaExclamationTriangle },
  ];

  return (
    <div className="dashboard-cards">
      {cards.map(({ label, value, tone, detail, icon: Icon }) => (
        <div key={label} className={`dashboard-card ${tone}`}>
          <div className="card-top">
            <div className="card-icon-wrap">
              <Icon className="card-icon" />
            </div>
            <span className="card-trend">+12%</span>
          </div>
          <h2>{value}</h2>
          <p>{label}</p>
          <span className="card-detail">{detail}</span>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;