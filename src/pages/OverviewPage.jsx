import { useState } from "react";
import DashboardCards from "../components/DashboardCards/DashboardCards";
import RecentComplaints from "../components/RecentComplaints/RecentComplaints";
import ComplaintDetailsModal from "../components/ComplaintDetailsModal/ComplaintDetailsModal";
import "./OverviewPage.css";

function OverviewPage({ complaints }) {

  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);

  const safeComplaints = Array.isArray(complaints) ? complaints : [];

  const pending = safeComplaints.filter(
    (item) => String(item.status || "").toLowerCase() === "pending"
  ).length;

  const resolved = safeComplaints.filter(
    (item) => String(item.status || "").toLowerCase() === "resolved"
  ).length;

  return (
    <section className="page-shell">

      <div className="hero-panel">
        <div>
          <p className="hero-kicker">Admin workspace</p>
          <h2>Support overview</h2>
          <p>
            Monitor complaints, response health, and AI assistance from one clean control center.
          </p>
        </div>

        <div className="welcome-badge">
          🤖 AI assistant active
        </div>
      </div>

      <DashboardCards complaints={complaints} />

      <div className="overview-grid">

        <div className="panel-card overview-card">

          <div className="section-heading">
            <div>
              <p className="eyebrow">Today</p>
              <h3>Response health</h3>
            </div>
          </div>

          <div className="health-list">

            <div className="health-row">
              <span>Resolution pace</span>
              <strong>84%</strong>
            </div>

            <div className="health-row">
              <span>Automation coverage</span>
              <strong>71%</strong>
            </div>

            <div className="health-row">
              <span>Pending follow-up</span>
              <strong>{pending}</strong>
            </div>

            <div className="health-row">
              <span>Resolved this week</span>
              <strong>{resolved}</strong>
            </div>

          </div>

        </div>

        <RecentComplaints
          complaints={complaints}
          onView={(complaint) => {
            setSelectedComplaint(complaint);
            setOpenDetailsModal(true);
          }}
        />

      </div>

      <ComplaintDetailsModal
        open={openDetailsModal}
        complaint={selectedComplaint}
        onClose={() => {
          setOpenDetailsModal(false);
          setSelectedComplaint(null);
        }}
      />

    </section>
  );
}

export default OverviewPage;