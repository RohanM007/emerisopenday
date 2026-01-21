import FacultyCard from '../components/FacultyCard';
import { faculties } from '../data/facultyData';
import emerisLogo from '../assets/Emeris.png';
import { GraduationCap, BookOpen, Award, ArrowRight, Sparkles, Target, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Header with Logo */}
      <header className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#004559] via-[#005a70] to-[#003d4d]"></div>

        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-pattern-slide" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Logo */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
                <img
                  src={emerisLogo}
                  alt="Emeris Logo"
                  className="h-32 md:h-48 object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Hero Text */}
            <div className="text-center space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-4">
                <Sparkles className="text-yellow-300" size={20} />
                <span className="text-white font-semibold">Faculty Open Day 2026</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                Shape Your
                <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                  Future Today
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Discover world-class education across four distinguished faculties.
                Your journey to excellence starts here.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <a
                  href="#faculties"
                  className="group bg-white text-[#004559] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Explore Faculties
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a
                  href="#faculties"
                  className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </header>

      {/* Faculties Section */}
      <section id="faculties" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#004559]/10 px-6 py-3 rounded-full mb-6">
              <Sparkles className="text-[#004559]" size={20} />
              <span className="text-[#004559] font-semibold">Our Faculties</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
              Choose Your Path to
              <span className="block bg-gradient-to-r from-[#004559] to-[#005a70] bg-clip-text text-transparent">
                Academic Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our distinguished faculties and discover programs designed to transform your aspirations into achievements
            </p>
          </div>

          {/* Faculty Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
            {faculties.map((faculty, index) => (
              <div
                key={faculty.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <FacultyCard faculty={faculty} />
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mx-auto mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Career-Focused',
                  description: 'Programs designed with industry needs in mind, ensuring you\'re job-ready upon graduation'
                },
                {
                  icon: TrendingUp,
                  title: 'Expert Faculty',
                  description: 'Learn from experienced professionals and academics who are leaders in their fields'
                },
                {
                  icon: Award,
                  title: 'Accredited Programs',
                  description: 'Internationally recognized qualifications that open doors worldwide'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-[#004559] to-[#005a70] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <feature.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004559] to-[#005a70]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Click on any faculty to explore comprehensive information about degree programs,
              higher certificates, and transparent fee structures
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: BookOpen, text: 'Comprehensive Programs' },
                { icon: Award, text: 'Downloadable Resources' },
                { icon: GraduationCap, text: 'Transparent Fees' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <item.icon className="mx-auto mb-3 text-yellow-300" size={32} />
                  <p className="text-white font-semibold">{item.text}</p>
                </div>
              ))}
            </div>

            <a
              href="#faculties"
              className="inline-flex items-center gap-2 bg-white text-[#004559] px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Explore All Faculties
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-6 overflow-hidden">
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-pattern-slide" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center space-y-3">
            <img
              src={emerisLogo}
              alt="Emeris Logo"
              className="h-10 object-contain opacity-80"
            />
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-1">© 2026 Emeris. All rights reserved.</p>
              <p className="text-gray-500 text-xs">Empowering minds, shaping futures</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

