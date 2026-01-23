import FacultyCard from '../components/FacultyCard';
import { faculties } from '../data/facultyData';
import emerisLogo from '../assets/Emeris.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Subtle Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Header - Minimal & Clean */}
      <header className="bg-gradient-to-br from-[#004559] to-[#005a70] py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-4">
              <img
                src={emerisLogo}
                alt="Emeris Logo"
                className="h-16 md:h-20 mx-auto object-contain"
              />
            </div>

            {/* Welcome Message */}
            <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
              Welcome to Emeris Pietermaritzburg
            </h1>

            {/* Event Info */}
            <p className="text-base md:text-lg text-blue-100">
              Faculty Open Day 2026
            </p>
          </div>
        </div>
      </header>

      {/* Disclaimer Section */}
      <section className="py-8 bg-amber-50 border-y-2 border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Important Notice</h3>
                  <div className="space-y-2 text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      This website was created specifically for <strong>Emeris Pietermaritzburg Open Day 2026</strong> and is <strong>not the official Emeris website</strong>.
                    </p>
                    <p>
                      All information regarding degree programs, modules, and fees has been sourced from the official Emeris website and documentation.
                    </p>
                    <p className="text-amber-800 font-semibold">
                      ⚠️ This website will be closed after the Open Day event. Please download all brochures and information you need as soon as possible before it is shut down.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculties Section */}
      <section id="faculties" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Our Faculties
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Click on a faculty to explore degree programs and higher certificates
            </p>
          </div>

          {/* Faculty Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {faculties.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-sm text-center">
              © 2026 Emeris Pietermaritzburg. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

