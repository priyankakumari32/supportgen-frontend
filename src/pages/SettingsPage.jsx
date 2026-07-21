import "./SettingsPage.css";

const settings = [
  { label: "Auto-assign priority", value: "Enabled" },
  { label: "AI escalation threshold", value: "High impact only" },
  { label: "Notification channel", value: "Slack + Email" },
];

function SettingsPage() {
  return (
    <section className="page-shell">
      <div className="hero-panel compact">
        <div>
          <p className="hero-kicker">Workspace settings</p>
          <h2>Fine-tune your support flow</h2>
          <p>Keep your team preferences and automation rules aligned.</p>
        </div>
      </div>

      <div className="panel-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Preferences</p>
            <h3>Automation controls</h3>
          </div>
        </div>

        <div className="settings-list">
          {settings.map((item) => (
            <div key={item.label} className="setting-row">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SettingsPage;
