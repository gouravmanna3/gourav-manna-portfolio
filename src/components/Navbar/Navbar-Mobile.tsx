import Hamburger from "hamburger-react";
import { useState } from "react";
import { LinkType, navLinks } from "../../utils/route";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";

const NavbarMobile: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-14 p-5 bg-neutral-950 border-b border-b-white/20"
          >
            <ul className="grid gap-2">
              {navLinks.map((link: LinkType, idx) => {
                const { Icon } = link;
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-800 hover:cursor-pointer"
                      to={link.to}
                      smooth={true}
                      duration={500}
                    >
                      <span className="flex gap-1 text-lg text-white">
                        {link.title}
                      </span>
                      <Icon className="text-xl text-white" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
