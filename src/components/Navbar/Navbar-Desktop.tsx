import { LinkType, navLinks } from "../../utils/route";

const NavbarDesktop: React.FC = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-16 text-sm">
      {navLinks.map((link: LinkType) => {
        const { Icon, href, title } = link;
        return (
          <li>
            <a
              href={href}
              className="flex items-center gap-2 hover:text-[#3D9970] transition-colors duration-300 ease-in-out"
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
