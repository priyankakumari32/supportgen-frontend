import "./ComplaintModal.css";
import ComplaintForm from "../ComplaintForm/ComplaintForm";

function ComplaintModal({ open, onClose, fetchComplaints }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <div className="modal-header">
          <h2>Raise New Complaint</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <ComplaintForm
    fetchComplaints={fetchComplaints}
    onSuccess={onClose}
/>

      </div>
    </div>
  );
}

export default ComplaintModal;