import { useState } from "react";
import API from "../../services/api";
import "./ComplaintForm.css";
import { toast } from "react-toastify";

function ComplaintForm({ fetchComplaints, onSuccess }) {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    issue: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

  const response = await API.post("/complaints", formData);

  fetchComplaints();

  if (onSuccess) {
    onSuccess();
  }

  setFormData({
    customerName: "",
    email: "",
    issue: "",
  });

  toast.success("Complaint analyzed successfully!");

  // Show warning if AI escalated the complaint
  if (response.data.status === "Escalated") {
    toast.warning("⚠ Complaint escalated to Human Support.");
  }

} catch (error) {

  console.log(error);

  toast.error("Failed to analyze complaint.");

} finally {

  setLoading(false);

}
  };

  return (
    <form className="complaint-form-card" onSubmit={handleSubmit}>

      <div className="section-heading">
        <div>
          <p className="eyebrow">New Ticket</p>
          <h3>Raise Complaint</h3>
        </div>

        <span className="section-pill">AI Assisted</span>
      </div>

      <p className="subtitle">
        Describe the issue and let Gemini AI analyze it automatically.
      </p>

      <label>Customer Name</label>

      <input
        type="text"
        name="customerName"
        value={formData.customerName}
        onChange={handleChange}
        required
      />

      <label>Email</label>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Issue</label>

      <textarea
        name="issue"
        rows="5"
        value={formData.issue}
        onChange={handleChange}
        required
      />

     <button
  type="submit"
  className="submit-btn"
  disabled={loading}
>
  {loading ? (
    <>
      <span className="spinner"></span>
      AI is analyzing...
    </>
  ) : (
    "🤖 Analyze with AI & Submit"
  )}
</button>
    </form>
  );
}

export default ComplaintForm;