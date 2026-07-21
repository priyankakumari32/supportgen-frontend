import "./Navbar.css";
import { FaBell, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <p className="eyebrow">Admin workspace</p>
        <h1>Support Dashboard</h1>
        <p>Manage customer complaints efficiently</p>
      </div>

      <div className="navbar-right">
        <label className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search complaints..." />
        </label>

        <button className="icon-btn" aria-label="Notifications">
          <FaBell />
          <span className="badge">3</span>
        </button>

        <div className="profile">
          <div className="avatar">P</div>
          <div className="profile-meta">
            <h4>Priyanka</h4>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;