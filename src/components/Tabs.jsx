import { NavLink } from "react-router-dom";

export default function Tabs() {
  return (
    <div className="hero-tabs">
      <NavLink 
        to="/works" 
        className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}>
        Works
      </NavLink>



      <NavLink
        to="/about"
        className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
      >
        About
      </NavLink>
    </div>
  );
}