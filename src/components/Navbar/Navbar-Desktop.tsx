import { NavlinkType, navLinks } from "../../utils/route";

const NavbarDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
      {navLinks.map((link: NavlinkType) => {
        const { Icon, href, title } = link;
        return (
          <li>
            <a
              href={href}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all"
            >
              <Icon />
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarDesktop;
