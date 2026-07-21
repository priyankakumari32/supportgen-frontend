import { useEffect, useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import DashboardCards from "./components/DashboardCards/DashboardCards";
import ComplaintForm from "./components/ComplaintForm/ComplaintForm";
import ComplaintTable from "./components/ComplaintTable/ComplaintTable";

import { getComplaints } from "./services/api";

function App() {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = () => {
    getComplaints()
      .then((response) => {
        setComplaints(response.data || []);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div className="app-shell">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <main className="dashboard">
          <section className="hero-panel">
            <div>
              <p className="hero-kicker">Operations Command Center</p>
              <h2>SupportGen AI dashboard</h2>
              <p>
                Monitor tickets, prioritize responses, and guide every customer issue with clarity.
              </p>
            </div>
            <div className="hero-chip">Live AI routing • 24/7</div>
          </section>

          <DashboardCards complaints={complaints} />

          <div className="content-grid">
            <ComplaintForm fetchComplaints={fetchComplaints} />
            <ComplaintTable complaints={complaints} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;