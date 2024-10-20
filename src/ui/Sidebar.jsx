import { NavLink } from "react-router-dom";

import { HiCollection, HiHome } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="bg-secondary-0 py-4 px-6 row-span-3">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavLink to="/owner/dashboard">
            <HiHome />
            <span>Dashboard</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/owner/projects">
            <HiCollection />
            <span>Projects</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomNavLink({ children, to }) {
  const navlinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navlinkClass} bg-primary-100/50 text-primary-900`
          : `${navlinkClass} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
