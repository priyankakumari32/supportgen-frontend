import { NavLink } from "react-router-dom";
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
  { label: "Overview", icon: FaHome, path: "/overview" },
  { label: "Complaints", icon: FaClipboardList, path: "/complaints" },
  { label: "AI Assistant", icon: FaRobot, path: "/ai-response" },
  { label: "Analytics", icon: FaChartBar, path: "/analytics" },
  { label: "Settings", icon: FaCog, path: "/settings" },
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
          {menuItems.map(({ label, icon: Icon, path }) => (
            <li key={label}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}
              >
                <Icon />
                <span>{label}</span>
              </NavLink>
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