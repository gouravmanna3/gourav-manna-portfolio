import { LinkType, navLinks } from "../../utils/route";
import { Link } from "react-scroll";

const NavbarDesktop: React.FC = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-16 text-sm">
      {navLinks.map((link: LinkType) => {
        const { Icon, title, to } = link;
        return (
          <li>
            <Link
              to={to}
              className="flex items-center gap-2 hover:text-[#3D9970] transition-colors duration-300 ease-in-out hover:cursor-pointer"
              smooth={true}
              duration={500}
            >
              <Icon size={20} />
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarDesktop;
