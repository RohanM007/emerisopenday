import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ProgramSection from '../components/ProgramSection';
import DownloadButton from '../components/DownloadButton';
import ModuleDisplayEducation from '../components/ModuleDisplayEducation';
import { getFacultyById } from '../data/facultyData';
import { BookOpen, Award, DollarSign } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-700"></div>

        {/* Interactive Particles - Knowledge Network */}
        {init && (
          <Particles
            id="tsparticles-education"
            particlesLoaded={particlesLoaded}
            options={educationParticles}
            className="absolute inset-0"
          />
        )}

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              {faculty.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              {faculty.description}
            </p>
          </div>
        </div>


      </section>

      {/* Module Display Section */}
      <ModuleDisplayEducation
        degreeModules={faculty.degree.modules}
        higherCertModules={faculty.higherCertificate.modules}
      />

      {/* Programs Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
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

