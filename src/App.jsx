import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import OverviewPage from "./pages/OverviewPage";
import ComplaintsPage from "./pages/ComplaintsPage";
import AiResponsePage from "./pages/AiResponsePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

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
          <Routes>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<OverviewPage complaints={complaints} />} />
            <Route
              path="/complaints"
              element={<ComplaintsPage complaints={complaints} fetchComplaints={fetchComplaints} />}
            />
            <Route path="/ai-response" element={<AiResponsePage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;