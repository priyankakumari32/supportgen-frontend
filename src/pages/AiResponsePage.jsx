import "./AiResponsePage.css";

const responseIdeas = [
  {
    title: "Billing issue",
    snippet: "I’m sorry about the unexpected charge. I’ve summarized the case and drafted a clear credit note for you.",
  },
  {
    title: "Delivery delay",
    snippet: "Thanks for your patience. I’ve flagged the order and arranged a priority follow-up through our logistics team.",
  },
  {
    title: "Account access",
    snippet: "I’ve prepared a secure recovery path and included a step-by-step guide to restore access quickly.",
  },
];

function AiResponsePage() {
  return (
    <section className="page-shell">
      <div className="hero-panel compact">
        <div>
          <p className="hero-kicker">AI response studio</p>
          <h2>Draft polished customer replies</h2>
          <p>Use curated response templates for common support scenarios.</p>
        </div>
      </div>

      <div className="response-grid">
        <div className="panel-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Suggested replies</p>
              <h3>Ready to send</h3>
            </div>
          </div>

          <div className="response-list">
            {responseIdeas.map((item) => (
              <div key={item.title} className="response-card">
                <h4>{item.title}</h4>
                <p>{item.snippet}</p>
                <button type="button">Use template</button>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Live assistant</p>
              <h3>Context-aware guidance</h3>
            </div>
          </div>

          <div className="assistant-card">
            <p>Customer sentiment: Positive</p>
            <p>Recommended action: Offer expedited resolution</p>
            <p>Suggested tone: Empathetic and concise</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiResponsePage;
