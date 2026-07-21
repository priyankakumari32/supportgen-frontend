import { Link } from "react-router-dom";
import DashboardCards from "../components/DashboardCards/DashboardCards";
import ComplaintTable from "../components/ComplaintTable/ComplaintTable";
import "./OverviewPage.css";

function OverviewPage({ complaints }) {
  const recentFocus = [
    "Escalate the two high-priority billing tickets before 4 PM.",
    "Use AI suggestions to reply to 6 unresolved refund requests.",
    "Monitor the new support sentiment trend after the product update.",
  ];

  return (
    <section className="page-shell">
      <div className="hero-panel">
        <div>
          <p className="hero-kicker">Operations command center</p>
          <h2>SupportGen AI dashboard</h2>
          <p>
            Track customer sentiment, automate replies, and keep every
            complaint on schedule.
          </p>
        </div>

        <div className="hero-actions">
          <span className="hero-chip">Live AI routing • 24/7</span>
          <Link className="hero-link" to="/ai-response">
            Open AI assistant
          </Link>
        </div>
      </div>

      <DashboardCards complaints={complaints} />

      <div className="content-grid">
        <div className="panel-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Smart highlights</p>
              <h3>Today’s priorities</h3>
            </div>
          </div>

          <ul className="priority-list">
            {recentFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <ComplaintTable complaints={complaints} />
      </div>
    </section>
  );
}

export default OverviewPage;
