import { FaArrowUp } from "react-icons/fa";
import Footer from "./footer";
import NavLinks from "./navbar";
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="w-full h-full custom-scrollbar-example relative">
      <div className={`${isHome && "landing"}`}>
        <NavLinks />
        <div className="">{children}</div>
      </div>
      <Footer />

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white text-[#be202f] p-3 rounded-full shadow-lg hover:bg-gray-300 transition-all duration-300 cursor-pointer"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default PageWrapper;
