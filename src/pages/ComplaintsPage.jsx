import { useState } from "react";
import ComplaintTable from "../components/ComplaintTable/ComplaintTable";
import ComplaintModal from "../components/ComplaintModal/ComplaintModal";
import ComplaintDetailsModal from "../components/ComplaintDetailsModal/ComplaintDetailsModal";
import "./ComplaintsPage.css";

function ComplaintsPage({ complaints, fetchComplaints }) {

  const [openModal, setOpenModal] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);

  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const safeComplaints = Array.isArray(complaints) ? complaints : [];

  const filteredComplaints = safeComplaints.filter((complaint) => {

    const matchesSearch =
      complaint.customerName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      complaint.issue
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesPriority =
      priorityFilter === "" ||
      complaint.priority === priorityFilter;

    const matchesStatus =
      statusFilter === "" ||
      complaint.status === statusFilter;

    return matchesSearch && matchesPriority && matchesStatus;
  });

  const pending = safeComplaints.filter(
    (c) => c.status === "Pending"
  ).length;

  const resolved = safeComplaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  return (
    <section className="page-shell">

      <div className="hero-panel compact">

        <div>
          <p className="hero-kicker">Complaint Management</p>
          <h2>Support Queue</h2>
          <p>
            Track customer complaints and manage them efficiently.
          </p>
        </div>

        <button
          className="new-complaint-btn"
          type="button"
          onClick={() => setOpenModal(true)}
        >
          + New Complaint
        </button>

      </div>

      <div className="complaints-summary">

        <div className="summary-card">
          <strong>📋 {safeComplaints.length}</strong>
          <span>Total Complaints</span>
        </div>

        <div className="summary-card">
          <strong>🟠 {pending}</strong>
          <span>Pending</span>
        </div>

        <div className="summary-card">
          <strong>🟢 {resolved}</strong>
          <span>Resolved</span>
        </div>

      </div>

      <div className="filter-bar">

        <input
          type="text"
          placeholder="🔍 Search customer or issue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="">All Priorities</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option>Pending</option>
          <option>Resolved</option>
          <option>Escalated</option>
        </select>

        <button
          className="clear-filter-btn"
          onClick={() => {
            setSearch("");
            setPriorityFilter("");
            setStatusFilter("");
          }}
        >
          Clear
        </button>

      </div>

      <ComplaintTable
        complaints={filteredComplaints}
        onViewComplaint={(complaint) => {
          setSelectedComplaint(complaint);
          setOpenDetailsModal(true);
        }}
      />

      <ComplaintModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        fetchComplaints={fetchComplaints}
      />

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

export default ComplaintsPage;