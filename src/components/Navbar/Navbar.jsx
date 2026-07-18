import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-custom">
      <h3>Dashboard</h3>

      <input
        type="text"
        placeholder="Search complaints..."
        className="search-box"
      />
    </div>
  );
}

export default Navbar;