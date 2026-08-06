import "./ComplaintTable.css";

function ComplaintTable({complaints = [],onViewComplaint,}) {
  const complaintList = Array.isArray(complaints) ? complaints : [];

  return (
    <div className="table-card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Live Queue</p>
          <h3>Customer Complaints</h3>
        </div>

        <span className="section-pill">
          {complaintList.length} Complaints
        </span>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {complaintList.length > 0 ? (
              complaintList.map((complaint) => {
                const priorityClass = (
                  complaint.priority || "Medium"
                ).toLowerCase();

                const statusClass = (
                  complaint.status || "Pending"
                )
                  .toLowerCase()
                  .replace(/\s+/g, "-");

                return (
                  <tr key={complaint.id}>
                    <td>{complaint.customerName}</td>

                    <td>{complaint.email}</td>

                    <td>{complaint.category}</td>

                    <td>
                      <span className={`priority ${priorityClass}`}>
                        {complaint.priority}
                      </span>
                    </td>

                    <td>
                      <span className={`status ${statusClass}`}>
                        {complaint.status}
                      </span>
                    </td>

                    <td>
                    <button
                      className="view-btn"
                      onClick={() => onViewComplaint(complaint)}
                       >
                          View
                    </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="empty-state">
                  No complaints found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplaintTable;