import { useState, useRef } from 'react';
import { Calendar, Award, RotateCw } from 'lucide-react';

const ModuleDisplayCommerce = ({ higherCertModules, degreeModules }) => {
  const [activeTab, setActiveTab] = useState('degree');
  const [flippedCards, setFlippedCards] = useState({});
  const moduleGridRef = useRef(null);

  const toggleFlip = (moduleCode) => {
    setFlippedCards(prev => ({
      ...prev,
      [moduleCode]: !prev[moduleCode]
    }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Scroll to module grid after tab change
    setTimeout(() => {
      moduleGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const modules = activeTab === 'degree' ? degreeModules : higherCertModules;

  // Function to get emoji based on module name/code
  const getModuleEmoji = (moduleName, moduleCode) => {
    const name = moduleName.toLowerCase();
    const code = moduleCode.toLowerCase();

    if (name.includes('accounting') || code.includes('ac')) return '💰';
    if (name.includes('business management') || name.includes('administration')) return '📊';
    if (name.includes('economics') || code.includes('pmic') || code.includes('pmac')) return '📈';
    if (name.includes('marketing')) return '🎯';
    if (name.includes('communication')) return '💬';
    if (name.includes('quantitative')) return '🔢';
    if (name.includes('digital') || name.includes('software')) return '💻';
    if (name.includes('project management')) return '📋';
    if (name.includes('work integrated')) return '🎓';
    return '📚';
  };

  // Function to get color gradient based on module type
  const getModuleColors = (moduleName, moduleCode) => {
    const name = moduleName.toLowerCase();
    const code = moduleCode.toLowerCase();

    // Accounting - Gold/Amber
    if (name.includes('accounting') || code.includes('ac')) {
      return { front: 'from-amber-500 to-yellow-600', back: 'from-amber-600 to-yellow-700' };
    }
    // Business Management - Green
    if (name.includes('business management') || name.includes('administration')) {
      return { front: 'from-green-500 to-emerald-600', back: 'from-green-600 to-emerald-700' };
    }
    // Economics - Blue
    if (name.includes('economics') || code.includes('pmic') || code.includes('pmac')) {
      return { front: 'from-blue-500 to-cyan-600', back: 'from-blue-600 to-cyan-700' };
    }
    // Marketing - Purple/Pink
    if (name.includes('marketing')) {
      return { front: 'from-purple-500 to-pink-600', back: 'from-purple-600 to-pink-700' };
    }
    // Communication - Teal
    if (name.includes('communication')) {
      return { front: 'from-teal-500 to-cyan-600', back: 'from-teal-600 to-cyan-700' };
    }
    // Quantitative - Indigo
    if (name.includes('quantitative')) {
      return { front: 'from-indigo-500 to-blue-600', back: 'from-indigo-600 to-blue-700' };
    }
    // Digital/Software - Slate/Gray
    if (name.includes('digital') || name.includes('software')) {
      return { front: 'from-slate-600 to-gray-700', back: 'from-slate-700 to-gray-800' };
    }
    // Project Management - Orange
    if (name.includes('project management')) {
      return { front: 'from-orange-500 to-red-600', back: 'from-orange-600 to-red-700' };
    }
    // Work Integrated Learning - Rose
    if (name.includes('work integrated')) {
      return { front: 'from-rose-500 to-pink-600', back: 'from-rose-600 to-pink-700' };
    }
    // Default - Green
    return { front: 'from-green-500 to-green-600', back: 'from-green-600 to-emerald-700' };
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl px-8 py-6 border-2 border-green-200 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              First Year Modules
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore the modules you'll study in your first year
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => handleTabChange('degree')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'degree'
                  ? 'bg-white border-green-500 text-green-600 shadow-md'
                  : 'text-gray-600 hover:border-green-300 hover:text-green-500'
              }`}
            >
              Degree Year 1
            </button>
            <button
              onClick={() => handleTabChange('certificate')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'certificate'
                  ? 'bg-white border-green-500 text-green-600 shadow-md'
                  : 'text-gray-600 hover:border-green-300 hover:text-green-500'
              }`}
            >
              Higher Certificate
            </button>
          </div>
        </div>

        {/* Module Grid - 3D Flip Cards with Enhanced Design */}
        <div ref={moduleGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            // Calculate dynamic text size based on module name length
            const nameLength = module.name.length;
            const textSize = nameLength > 40 ? 'text-base' : nameLength > 30 ? 'text-lg' : 'text-xl';

            // Get colors and emoji for this module
            const colors = getModuleColors(module.name, module.code);
            const emoji = getModuleEmoji(module.name, module.code);

            return (
            <div
              key={module.code}
              className="perspective-1000 h-72"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${
                  flippedCards[module.code] ? 'rotate-y-180' : ''
                }`}
                onClick={() => toggleFlip(module.code)}
              >
                {/* Front of Card - Color-coded with Emoji */}
                <div className="absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden commerce-card-front">
                  {/* Dynamic Color Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.front}`}></div>
                  <div className="absolute inset-0 opacity-20 commerce-stripes"></div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-tr-full"></div>

                  {/* Decorative Lines */}
                  <div className="absolute top-4 left-4 w-12 h-1 bg-white/30"></div>
                  <div className="absolute top-7 left-4 w-8 h-1 bg-white/30"></div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                    <div className="text-center">
                      {/* Emoji Icon */}
                      <div className="mb-4 text-6xl drop-shadow-lg">
                        {emoji}
                      </div>
                      <h3 className="text-4xl font-bold mb-4 tracking-wider drop-shadow-lg">
                        {module.code}
                      </h3>
                      <div className="flex items-center justify-center text-white/90 text-sm">
                        <RotateCw className="w-4 h-4 mr-2 animate-spin-slow" />
                        <span className="font-medium">Click to flip</span>
                      </div>
                    </div>
                  </div>

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-xl border-2 border-white/20"></div>
                </div>

                {/* Back of Card - Matching Color */}
                <div className="absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden rotate-y-180 commerce-card-back">
                  {/* Dynamic Color Gradient - Darker shade */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.back}`}></div>
                  
                  {/* Geometric Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10 commerce-dots"></div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 left-0 w-20 h-20">
                    <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-20 h-20">
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between text-white p-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold border border-white/30">
                          {module.code}
                        </span>
                        <div className="flex items-center text-white/90 text-sm bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>Sem {module.semester}</span>
                        </div>
                      </div>

                      <h3 className={`font-bold mb-4 leading-tight drop-shadow-md ${textSize}`}>
                        {module.name}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                        <div className="flex items-center">
                          <Award className="w-5 h-5 mr-2" />
                          <span className="font-semibold">Credits</span>
                        </div>
                        <span className="text-2xl font-bold">{module.credits}</span>
                      </div>

                      {module.nqf && (
                        <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                          <span className="font-semibold text-sm">NQF Level</span>
                          <span className="text-xl font-bold">{module.nqf}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-center text-white/70 text-xs pt-2">
                        <RotateCw className="w-3 h-3 mr-1" />
                        <span>Click to flip back</span>
                      </div>
                    </div>
                  </div>

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-xl border-2 border-white/20"></div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Total Credits Summary */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg px-8 py-4 border-2 border-green-200 shadow-lg">
            <p className="text-gray-600 mb-1 font-medium">Total Credits</p>
            <p className="text-3xl font-bold text-green-700">
              {modules.reduce((sum, module) => sum + module.credits, 0)} Credits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDisplayCommerce;

