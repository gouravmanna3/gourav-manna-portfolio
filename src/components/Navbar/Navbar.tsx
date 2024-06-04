import { NavbarProps } from "./Navbar.types";
import NavbarMobile from "./Navbar-Mobile";
import NavbarDesktop from "./Navbar-Desktop";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex justify-between items-center py-1 px-4 md:px-20 md:py-4 text-white">
      <a
        className="text-lg md:text-2xl tracking-widest hover:cursor-pointer font-dancingScript"
        href="#"
      >
        Gourav Manna
      </a>
      <div className="flex gap-8 lg:gap-48 items-center font-robotoSlab tracking-widest">
        <NavbarDesktop />
        {/* <button className="bg-blue-700 text-white px-4 py-2 rounded font-bold">
          Login
        </button> */}
        <NavbarMobile />
      </div>
    </nav>
  );
};

export default Navbar;
