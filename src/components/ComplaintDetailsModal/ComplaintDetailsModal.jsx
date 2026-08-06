import "./ComplaintDetailsModal.css";

function ComplaintDetailsModal({ open, onClose, complaint }) {

  if (!open || !complaint) return null;

  return (
    <div className="modal-overlay">

      <div className="details-modal">

        <div className="modal-header">
          <h2>Complaint Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="details-body">

          <p><strong>Customer:</strong> {complaint.customerName}</p>

          <p><strong>Email:</strong> {complaint.email}</p>

          <p><strong>Issue:</strong></p>
          <div className="details-box">
            {complaint.issue}
          </div>

          <p><strong>Category:</strong> {complaint.category}</p>

          <p><strong>Priority:</strong> {complaint.priority}</p>

          <p><strong>Status:</strong> {complaint.status}</p>

          <p><strong>AI Summary:</strong></p>
          <div className="details-box">
            {complaint.summary}
          </div>

          <p><strong>AI Response:</strong></p>
          <div className="details-box">
            {complaint.aiResponse}
          </div>

        </div>

      </div>

    </div>
  );
}

export default ComplaintDetailsModal;