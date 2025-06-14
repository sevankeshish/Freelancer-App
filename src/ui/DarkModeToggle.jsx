import { HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-5 h-5 text-primary-900" />
      ) : (
        <HiOutlineSun className="w-5 h-5 text-primary-900" />
      )}
    </button>
  );
}

export default DarkModeToggle;
