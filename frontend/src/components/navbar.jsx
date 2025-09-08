import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "20px", color: "#fff", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/notes" style={{ color: "#fff", textDecoration: "none" }}>
        Notes
      </Link>
    </nav>
  );
}

export default Navbar;
