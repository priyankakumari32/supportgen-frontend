import "./RecentComplaints.css";

function RecentComplaints({ complaints, onView }) {
  return (
    <div className="recent-card">
      <div className="recent-header">
        <h3>Recent Complaints</h3>
        <span>{complaints.length} Tickets</span>
      </div>

      <table className="recent-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Priority</th>
            <th>Category</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {complaints.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty">
                No complaints found.
              </td>
            </tr>
          ) : (
            complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>{complaint.customerName}</td>

                <td>
                  <span className={`priority ${complaint.priority}`}>
                    {complaint.priority}
                  </span>
                </td>

                <td>{complaint.category}</td>

                <td>
                  <span className={`status ${complaint.status}`}>
                    {complaint.status}
                  </span>
                </td>

                <td>
                  <button
                    className="view-btn"
                    onClick={() => onView(complaint)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecentComplaints;