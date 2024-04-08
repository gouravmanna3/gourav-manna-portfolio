import { NavlinkType, navLinks } from "../../utils/route";

const NavbarDesktop: React.FC = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-20 text-sm">
      {navLinks.map((link: NavlinkType) => {
        const { Icon, href, title } = link;
        return (
          <li>
            <a
              href={href}
              className="flex items-center gap-2 hover:text-neutral-400 transition-all"
            >
              <Icon size={20} />
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarDesktop;
