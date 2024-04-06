import { NavbarProps } from "./Navbar.types";
import NavbarMobile from "./Navbar-Mobile";
import NavbarDesktop from "./Navbar-Desktop";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="container flex justify-between items-center py-1 lg:py-5 ">
      <span className="text-lg">Gourav Manna</span>
      <NavbarMobile />
      <NavbarDesktop />
    </nav>
  );
};

export default Navbar;
