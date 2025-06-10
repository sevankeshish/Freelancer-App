import { HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";

function HeaderMenu() {
  return (
    <ul className="flex gap-x-4 items-center">
      <li className="flex">
        <Link to="dashboard">
          <HiOutlineUser className="w-5 h-5 text-primary-900" />
        </Link>
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
