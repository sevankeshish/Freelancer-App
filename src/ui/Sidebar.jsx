import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-secondary-0 py-4 px-6 row-span-3 text-right">
      <ul>
        <li>
          <NavLink to="/owner/dashboard">Home</NavLink>
        </li>
        <li>
          <NavLink to="/owner/projects">Projects</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
