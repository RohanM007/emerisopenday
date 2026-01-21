import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import emerisLogo from '../assets/Emeris.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#004559] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition" onClick={closeMenu}>
            <img
              src={emerisLogo}
              alt="Emeris Logo"
              className="h-16 md:h-20 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/education" className="text-white hover:text-blue-300 transition font-semibold">Education</Link>
            <Link to="/law" className="text-white hover:text-purple-300 transition font-semibold">Law</Link>
            <Link to="/commerce" className="text-white hover:text-green-300 transition font-semibold">Commerce</Link>
            <Link to="/humanities" className="text-white hover:text-orange-300 transition font-semibold">Humanities</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:bg-[#005a70] rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              to="/education"
              className="block text-white hover:text-blue-300 transition font-semibold py-2 px-4 rounded hover:bg-[#005a70]"
              onClick={closeMenu}
            >
              Education
            </Link>
            <Link
              to="/law"
              className="block text-white hover:text-purple-300 transition font-semibold py-2 px-4 rounded hover:bg-[#005a70]"
              onClick={closeMenu}
            >
              Law
            </Link>
            <Link
              to="/commerce"
              className="block text-white hover:text-green-300 transition font-semibold py-2 px-4 rounded hover:bg-[#005a70]"
              onClick={closeMenu}
            >
              Commerce
            </Link>
            <Link
              to="/humanities"
              className="block text-white hover:text-orange-300 transition font-semibold py-2 px-4 rounded hover:bg-[#005a70]"
              onClick={closeMenu}
            >
              Humanities
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

