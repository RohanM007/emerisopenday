import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ProgramSection from '../components/ProgramSection';
import DownloadButton from '../components/DownloadButton';
import ModuleDisplayEducation from '../components/ModuleDisplayEducation';
import Disclaimer from '../components/Disclaimer';
import { getFacultyById } from '../data/facultyData';
import { BookOpen, Award, DollarSign, MapPin, Users, Heart } from 'lucide-react';
import { educationParticles } from '../config/particlesConfig';

const Education = () => {
  const faculty = getFacultyById('education');
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Interactive Particles - Full Page */}
      {init && (
        <Particles
          id="tsparticles-education"
          particlesLoaded={particlesLoaded}
          options={educationParticles}
          className="fixed inset-0 z-0"
        />
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-700"></div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              {faculty.name}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              {faculty.description}
            </p>
          </div>
        </div>


      </section>

      {/* Disclaimer Section */}
      <Disclaimer />

      {/* Module Display Section */}
      <ModuleDisplayEducation
        degreeModules={faculty.degree.modules}
        higherCertModules={faculty.higherCertificate.modules}
      />

      {/* What B.Ed Offers Section */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              What B.Ed Offers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Field Trips */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="text-purple-600" size={28} />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  Exciting Beyond the Curriculum Field Trips
                </h4>
                <p className="text-gray-600 text-sm text-center">
                  Explore educational sites and gain real-world learning experiences
                </p>
              </div>

              {/* Teaching Experience */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Users className="text-pink-600" size={28} />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  Teaching Experience
                </h4>
                <p className="text-gray-600 text-sm text-center">
                  Hands-on classroom practice to develop your teaching skills
                </p>
              </div>

              {/* Service Learning */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Heart className="text-purple-600" size={28} />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  Service Learning & Community Outreach
                </h4>
                <p className="text-gray-600 text-sm text-center">
                  Make a difference through community engagement initiatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Excursion Suggestions Form */}
      <div className="container mx-auto px-4 pb-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Suggest an Excursion
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Have an idea for an exciting educational excursion? Share your suggestions with us!
            </p>

            {/* Google Form Embed */}
            <div className="max-w-3xl mx-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdXx73f0danRawEuY27ONHh0HeDVHVFJazc_w0oJTZwNWH2uQ/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="rounded-lg"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Downloads Section - At the Bottom */}
      <div className="container mx-auto px-4 pb-12 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Program Information & Downloads
            </h2>
            <p className="text-gray-600">
              Download detailed information about our programs and fees
            </p>
          </div>

          {/* Degree Program */}
          <ProgramSection
            title={faculty.degree.title}
            description={faculty.degree.description}
            downloadUrl={faculty.degree.downloadUrl}
            color="education"
            icon={BookOpen}
          />

          {/* Higher Certificate */}
          <ProgramSection
            title={faculty.higherCertificate.title}
            description={faculty.higherCertificate.description}
            downloadUrl={faculty.higherCertificate.downloadUrl}
            color="education"
            icon={Award}
          />

          {/* Fees Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <DollarSign className="text-education mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">Fees Information</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Download our comprehensive fees structure document for detailed information about tuition, registration, and other costs.
            </p>
            <DownloadButton label="Download Fees Information" url={faculty.feesUrl} color="education" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

