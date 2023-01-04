/** @format */
import { useContext } from "react";
import UserContext from "./UserContext";

function Header() {
  let isDarkMode = useContext(UserContext);
  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
