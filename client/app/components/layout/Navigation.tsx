import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { path: "/events", label: "Events" },
    { path: "/hackathons", label: "Hackathons" },
    { path: "/scrapbook", label: "Scrapbook" },
    { path: "/blogs", label: "Blogs" },
    { path: "/admin", label: "Admin" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full py-1 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A1D3D]/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center user-select-none">
            <Link to="/" className="flex items-center space-x-2">
              <img
              src={"/images/logo2.png"}
              alt="Club Logo"
              className={`no-drag pointer-events-none user-select-none transition-all duration-150 ${
                scrolled ? "h-10 w-auto sm:h-14" : "h-15 w-auto sm:h-16"
              }`}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105
                    isActive(item.path)
                        ? scrolled 
                          ? "text-[#FFE600]" 
                          : "text-[#FFE600]"
                        : scrolled
                          ? "text-white hover:text-[#F5B282]"
                          : "text-white hover:text-[#F5B282]"`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden absolute w-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border-t border-gray-200 dark:border-gray-700"
          >
            <motion.div
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -10 },
                  }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
