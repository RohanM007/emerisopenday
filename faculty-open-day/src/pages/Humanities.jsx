import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ProgramSection from '../components/ProgramSection';
import DownloadButton from '../components/DownloadButton';
import ModuleDisplayHumanities from '../components/ModuleDisplayHumanities';
import HumanitiesCareerGallery from '../components/HumanitiesCareerGallery';
import Disclaimer from '../components/Disclaimer';
import { getFacultyById } from '../data/facultyData';
import { BookOpen, Award, DollarSign } from 'lucide-react';
import { humanitiesParticles } from '../config/particlesConfig';

const Humanities = () => {
  const faculty = getFacultyById('humanities');
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
          id="tsparticles-humanities"
          particlesLoaded={particlesLoaded}
          options={humanitiesParticles}
          className="fixed inset-0 z-0"
        />
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background with Literary Colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-800 to-red-900"></div>

        {/* Decorative Quote Marks */}
        <div className="absolute top-10 left-10 text-humanities-cream opacity-20 text-9xl font-playfair pointer-events-none">"</div>
        <div className="absolute bottom-10 right-10 text-humanities-cream opacity-20 text-9xl font-playfair pointer-events-none">"</div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-playfair">
              {faculty.name}
            </h1>
            <p className="text-xl md:text-2xl text-humanities-cream leading-relaxed font-crimson italic">
              {faculty.description}
            </p>
          </div>
        </div>


      </section>

      {/* Disclaimer Section */}
      <Disclaimer />

      {/* Module Display Section */}
      <ModuleDisplayHumanities
        degreeModules={faculty.degree.modules}
        higherCertModules={faculty.higherCertificate.modules}
      />

      {/* Career Gallery Section */}
      <HumanitiesCareerGallery />

      {/* Programs Section */}
      <div className="container mx-auto px-4 py-12 relative z-10">

        {/* Programs Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Degree Program */}
          <ProgramSection
            title={faculty.degree.title}
            description={faculty.degree.description}
            downloadUrl={faculty.degree.downloadUrl}
            color="humanities"
            icon={BookOpen}
          />

          {/* Higher Certificate */}
          <ProgramSection
            title={faculty.higherCertificate.title}
            description={faculty.higherCertificate.description}
            downloadUrl={faculty.higherCertificate.downloadUrl}
            color="humanities"
            icon={Award}
          />

          {/* Fees Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <DollarSign className="text-humanities mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">Fees Information</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Download our comprehensive fees structure document for detailed information about tuition, registration, and other costs.
            </p>
            <DownloadButton label="Download Fees Information" url={faculty.feesUrl} color="humanities" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Humanities;

