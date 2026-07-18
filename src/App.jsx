import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import DashboardCards from "./components/DashboardCards/DashboardCards";
import ComplaintTable from "./components/ComplaintTable/ComplaintTable";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <ComplaintTable />

      <div
        style={{
          marginLeft: "270px",
          marginTop: "90px",
          padding: "20px",
          background: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <h2>Welcome to SupportGen AI</h2>

        <DashboardCards />
         <ComplaintTable />
      </div>
    </>
  );
}

export default App;