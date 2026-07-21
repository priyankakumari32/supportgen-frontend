import ComplaintForm from "../components/ComplaintForm/ComplaintForm";
import ComplaintTable from "../components/ComplaintTable/ComplaintTable";
import "./ComplaintsPage.css";

function ComplaintsPage({ complaints, fetchComplaints }) {
  return (
    <section className="page-shell">
      <div className="hero-panel compact">
        <div>
          <p className="hero-kicker">Complaint management</p>
          <h2>Manage the ticket queue</h2>
          <p>Launch new tickets and keep the customer journey organized.</p>
        </div>
      </div>

      <div className="content-grid">
        <ComplaintForm fetchComplaints={fetchComplaints} />
        <ComplaintTable complaints={complaints} />
      </div>
    </section>
  );
}

export default ComplaintsPage;
