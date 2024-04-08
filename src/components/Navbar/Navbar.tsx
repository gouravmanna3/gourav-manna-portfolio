import { NavbarProps } from "./Navbar.types";
import NavbarMobile from "./Navbar-Mobile";
import NavbarDesktop from "./Navbar-Desktop";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className=" flex justify-between items-center py-4 px-10 lg:px-20 text-white">
      <span className="text-lg">Gourav Manna</span>
      <div className="flex gap-8 lg:gap-48">
        <NavbarDesktop />
        <button className="bg-blue-700 text-white px-4 py-2 rounded font-bold">
          Login
        </button>
        <NavbarMobile />
      </div>
    </nav>
  );
};

export default Navbar;
