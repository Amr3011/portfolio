import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-50 px-4 md:px-8 lg:px-32 pt-6 pb-4 shadow-sm">
      <div className="flex items-center justify-center md:justify-center relative">
        {/* Logo/Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-medium text-gray-800 text-xl md:mr-20 lg:mr-60 absolute left-0 md:relative cursor-pointer hover:text-gray-900 transition-colors"
        >
          Amr
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 md:ml-20 lg:ml-60">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base"
          >
            Home
          </button>
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base"
          >
            About
          </button>
          <button
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base"
          >
            Skills
          </button>
          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base"
          >
            Servicess
          </button>
          <button
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base"
          >
            Portfolio
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden absolute right-0 p-2 text-gray-800 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-gray-200 pt-4">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              toggleMenu();
            }}
            className="text-gray-700 hover:text-gray-900 transition-colors py-2 px-4 hover:bg-gray-100 rounded text-left"
          >
            Home
          </button>
          <button
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
            className="text-gray-700 hover:text-gray-900 transition-colors py-2 px-4 hover:bg-gray-100 rounded text-left"
          >
            About
          </button>
          <button
            onClick={() => {
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
            className="text-gray-700 hover:text-gray-900 transition-colors py-2 px-4 hover:bg-gray-100 rounded text-left"
          >
            Skills
          </button>
          <button
            onClick={() => {
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
            className="text-gray-700 hover:text-gray-900 transition-colors py-2 px-4 hover:bg-gray-100 rounded text-left"
          >
            Servicess
          </button>
          <button
            onClick={() => {
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
            className="text-gray-700 hover:text-gray-900 transition-colors py-2 px-4 hover:bg-gray-100 rounded text-left"
          >
            Portfolio
          </button>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
            className="text-gray-700 hover:text-gray-900 transition-colors py-2 px-4 hover:bg-gray-100 rounded text-left"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
