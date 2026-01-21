import { Link } from 'react-router-dom';
import emerisLogo from '../assets/Emeris.png';

const Navbar = () => {
  return (
    <nav className="bg-[#004559] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <img
              src={emerisLogo}
              alt="Emeris Logo"
              className="h-16 md:h-20 object-contain"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/education" className="text-white hover:text-blue-300 transition font-semibold">Education</Link>
            <Link to="/law" className="text-white hover:text-purple-300 transition font-semibold">Law</Link>
            <Link to="/commerce" className="text-white hover:text-green-300 transition font-semibold">Commerce</Link>
            <Link to="/humanities" className="text-white hover:text-orange-300 transition font-semibold">Humanities</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

