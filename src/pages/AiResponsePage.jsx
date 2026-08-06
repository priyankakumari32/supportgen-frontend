import "./AiResponsePage.css";

function AiResponsePage({ complaints = [] }) {
  return (
    <section className="page-shell">
      <div className="hero-panel compact">
        <div>
          <p className="hero-kicker">AI Response Studio</p>
          <h2>Gemini AI Analysis</h2>
          <p>
            Review AI-generated complaint summaries and suggested responses.
          </p>
        </div>
      </div>

      <div className="response-list">

        {complaints.length > 0 ? (

          complaints.map((complaint) => (

            <div className="response-card" key={complaint.id}>

              <h3>{complaint.customerName}</h3>

              <p>
                <strong>Issue:</strong> {complaint.issue}
              </p>

              <p>
                <strong>Priority:</strong> {complaint.priority}
              </p>

              <p>
                <strong>Category:</strong> {complaint.category}
              </p>

              <p>
                <strong>Summary:</strong>
                <br />
                {complaint.summary}
              </p>

              <p>
                <strong>AI Response:</strong>
                <br />
                {complaint.aiResponse}
              </p>

            </div>

          ))

        ) : (

          <p>No AI analysis available.</p>

        )}

      </div>
    </section>
  );
}

export default AiResponsePage;