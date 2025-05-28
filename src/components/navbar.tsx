import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { logo } from "../constants/assets";

const baseLinks = [
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const logoSize = windowWidth < 640 ? 40 : 50;

  const dynamicLinks = [...baseLinks];

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isContact = location.pathname === "/contact";
  const isService = location.pathname === "/services";

  return (
    <div className="relative">
      {(isHome || isContact || isService) && (
        <div className="absolute inset-0 bg-[#00000086] bg-opacity-60 z-0" />
      )}

      <nav className="flex justify-between items-center sm:px-10 px-4 w-full py-4 relative z-20">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="My Logo"
            width={logoSize}
            height={logoSize}
            className="scale-125"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-4 font-Montserrat">
          {[...dynamicLinks].map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`px-4 py-2 hover:text-[#be202f] hover:font-semibold hover:scale-110 rounded-md ${
                currentPath.includes(link.href)
                  ? "text-[#be202f] p-2 bg-white font-bold scale-110"
                  : "font-medium text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2 rounded-md focus:outline-none"
        >
          <Menu size={32} className={`${(isHome || isContact || isService) ? 'text-white' : 'text-black'}`} />
        </button>

        <motion.div
          ref={menuRef}
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col items-center justify-center text-black"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-3 right-3"
          >
            <X size={40} className="text-[#be202f]" />
          </button>

          <div className="space-y-6 text-center flex flex-col justify-center font-Urbanist">
            {[...dynamicLinks].map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xl font-semibold hover:text-[#f69223] transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </div>
  );
}
