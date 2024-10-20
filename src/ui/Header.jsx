import React from "react";
import useUser from "../features/authentication/useUser";

function Header() {
  const { data } = useUser();
  return (
    <div className="bg-secondary-0 py-4 px-6 row-start-1 text-right">
      app header
    </div>
  );
}

export default Header;
