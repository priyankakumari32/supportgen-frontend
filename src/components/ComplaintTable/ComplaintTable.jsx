import "./ComplaintTable.css";

function ComplaintTable({ complaints = [] }) {
  const complaintList = Array.isArray(complaints) ? complaints : [];

  return (
    <div className="table-card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Live queue</p>
          <h3>AI Complaint Analysis</h3>
        </div>
        <span className="section-pill">Updated now</span>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Issue</th>
              <th>Priority</th>
              <th>Category</th>
              <th>Summary</th>
              <th>AI Response</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {complaintList.length > 0 ? (
              complaintList.map((complaint) => {
                const priorityClass = (complaint.priority || "Medium")
                  .toLowerCase();

                const statusClass = (complaint.status || "Pending")
                  .toLowerCase()
                  .replace(/\s+/g, "-");

                return (
                  <tr key={complaint.id}>
                    <td>{complaint.customerName}</td>

                    <td>{complaint.issue}</td>

                    <td>
                      <span className={`priority ${priorityClass}`}>
                        {complaint.priority}
                      </span>
                    </td>

                    <td>{complaint.category}</td>

                    <td>{complaint.summary}</td>

                    <td>{complaint.aiResponse}</td>

                    <td>
                      <span className={`status ${statusClass}`}>
                        {complaint.status}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="empty-state">
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