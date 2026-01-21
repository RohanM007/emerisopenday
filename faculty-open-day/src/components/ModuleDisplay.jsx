import { useState } from 'react';
import { BookOpen, Calendar, Award, RotateCw } from 'lucide-react';

const ModuleDisplay = ({ higherCertModules, degreeModules, facultyColor }) => {
  const [activeTab, setActiveTab] = useState('degree');
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (moduleCode) => {
    setFlippedCards(prev => ({
      ...prev,
      [moduleCode]: !prev[moduleCode]
    }));
  };

  const colorClasses = {
    education: {
      tab: 'border-blue-500 text-blue-600',
      tabHover: 'hover:border-blue-300 hover:text-blue-500',
      cardFront: 'bg-gradient-to-br from-blue-500 to-blue-600',
      cardBack: 'bg-gradient-to-br from-blue-600 to-cyan-600',
      badge: 'bg-blue-100 text-blue-700',
    },
    law: {
      tab: 'border-purple-500 text-purple-600',
      tabHover: 'hover:border-purple-300 hover:text-purple-500',
      cardFront: 'bg-gradient-to-br from-purple-500 to-purple-600',
      cardBack: 'bg-gradient-to-br from-purple-600 to-pink-600',
      badge: 'bg-purple-100 text-purple-700',
    },
    commerce: {
      tab: 'border-green-500 text-green-600',
      tabHover: 'hover:border-green-300 hover:text-green-500',
      cardFront: 'bg-gradient-to-br from-green-500 to-green-600',
      cardBack: 'bg-gradient-to-br from-green-600 to-emerald-600',
      badge: 'bg-green-100 text-green-700',
    },
    humanities: {
      tab: 'border-orange-500 text-orange-600',
      tabHover: 'hover:border-orange-300 hover:text-orange-500',
      cardFront: 'bg-gradient-to-br from-orange-500 to-orange-600',
      cardBack: 'bg-gradient-to-br from-orange-600 to-red-600',
      badge: 'bg-orange-100 text-orange-700',
    },
  };

  const colors = colorClasses[facultyColor] || colorClasses.education;
  const modules = activeTab === 'degree' ? degreeModules : higherCertModules;

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            First Year Modules
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the modules you'll study in your first year
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('degree')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'degree'
                  ? `bg-white ${colors.tab} shadow-md`
                  : `text-gray-600 ${colors.tabHover}`
              }`}
            >
              Degree Year 1
            </button>
            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'certificate'
                  ? `bg-white ${colors.tab} shadow-md`
                  : `text-gray-600 ${colors.tabHover}`
              }`}
            >
              Higher Certificate
            </button>
          </div>
        </div>

        {/* Module Grid - 3D Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div
              key={module.code}
              className="perspective-1000 h-64"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${
                  flippedCards[module.code] ? 'rotate-y-180' : ''
                }`}
                onClick={() => toggleFlip(module.code)}
              >
                {/* Front of Card - Module Code */}
                <div
                  className={`absolute w-full h-full backface-hidden rounded-xl shadow-lg ${colors.cardFront} flex flex-col items-center justify-center text-white p-6`}
                >
                  <div className="text-center">
                    <div className="mb-4 opacity-20">
                      <BookOpen className="w-16 h-16 mx-auto" />
                    </div>
                    <h3 className="text-4xl font-bold mb-4 tracking-wider">
                      {module.code}
                    </h3>
                    <div className="flex items-center justify-center text-white/80 text-sm">
                      <RotateCw className="w-4 h-4 mr-2 animate-spin-slow" />
                      <span>Click to flip</span>
                    </div>
                  </div>
                </div>

                {/* Back of Card - Module Details */}
                <div
                  className={`absolute w-full h-full backface-hidden rounded-xl shadow-lg ${colors.cardBack} rotate-y-180 flex flex-col justify-between text-white p-6`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
                        {module.code}
                      </span>
                      <div className="flex items-center text-white/90 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Sem {module.semester}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 leading-tight">
                      {module.name}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Credits</span>
                      </div>
                      <span className="text-2xl font-bold">{module.credits}</span>
                    </div>

                    {module.nqf && (
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                        <span className="font-semibold text-sm">NQF Level</span>
                        <span className="text-xl font-bold">{module.nqf}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-center text-white/70 text-xs">
                      <RotateCw className="w-3 h-3 mr-1" />
                      <span>Click to flip back</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Credits Summary */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-50 rounded-lg px-8 py-4 border-2 border-gray-200">
            <p className="text-gray-600 mb-1">Total Credits</p>
            <p className="text-3xl font-bold text-gray-900">
              {modules.reduce((sum, module) => sum + module.credits, 0)} Credits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDisplay;

