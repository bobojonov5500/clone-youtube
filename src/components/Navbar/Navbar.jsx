import Search from "../Search/search-bar";
import { Link } from "react-router-dom";
import { SiYoutubeshorts } from "react-icons/si";

function Navbar() {
  return (
    <div className="flex items-center px-4 justify-between p-2 sticky top-0 z-[99] w-full bg-green-100">
      {/* Logo */}
      <Link to="/home">
        <SiYoutubeshorts
          className="w-[50px] h-auto transition duration-300 ease-in-out 
             hover:text-red-700 hover:-translate-y-1 hover:scale-110"
        />
      </Link>

      {/* Search bar */}
      <Search />

      {/* Right side placeholder */}
      <div />
    </div>
  );
}

export default Navbar;
