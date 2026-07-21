import "./Sidebar.css";

import {
  FaHome,
  FaClipboardList,
  FaRobot,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  { label: "Overview", icon: FaHome, active: true },
  { label: "Complaints", icon: FaClipboardList },
  { label: "AI Assistant", icon: FaRobot },
  { label: "Analytics", icon: FaChartBar },
  { label: "Settings", icon: FaCog },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo">
          <div className="logo-circle">AI</div>
          <div>
            <h2>SupportGen</h2>
            <p>AI Helpdesk</p>
          </div>
        </div>

        <ul className="menu">
          {menuItems.map(({ label, icon: Icon, active }) => (
            <li key={label} className={active ? "active" : ""}>
              <Icon />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="logout-btn">
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;