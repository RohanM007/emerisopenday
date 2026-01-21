import { useState } from 'react';
import { ChevronDown, BookOpen, Award, Calendar } from 'lucide-react';

const ModuleDisplayEducation = ({ higherCertModules, degreeModules }) => {
  const [activeTab, setActiveTab] = useState('degree');
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const modules = activeTab === 'degree' ? degreeModules : higherCertModules;

  // Group modules by category
  const groupedModules = modules.reduce((acc, module) => {
    const category = module.category || 'Other';
    if (!acc[category]) {
      acc[category] = { semester1: [], semester2: [], yearLong: [] };
    }
    
    if (module.semester === 0) {
      acc[category].yearLong.push(module);
    } else if (module.semester === 1) {
      acc[category].semester1.push(module);
    } else if (module.semester === 2) {
      acc[category].semester2.push(module);
    }
    
    return acc;
  }, {});

  const categoryColors = {
    'Professional Subjects': 'bg-blue-50 border-blue-200 text-blue-900',
    'Professional Themes': 'bg-cyan-50 border-cyan-200 text-cyan-900',
    'Professional Didactics I': 'bg-indigo-50 border-indigo-200 text-indigo-900',
    'Year Long': 'bg-purple-50 border-purple-200 text-purple-900',
    'Core Modules': 'bg-blue-50 border-blue-200 text-blue-900',
    'Electives - First Additional Languages': 'bg-green-50 border-green-200 text-green-900',
  };

  const categoryHeaderColors = {
    'Professional Subjects': 'bg-blue-500 hover:bg-blue-600',
    'Professional Themes': 'bg-cyan-500 hover:bg-cyan-600',
    'Professional Didactics I': 'bg-indigo-500 hover:bg-indigo-600',
    'Year Long': 'bg-purple-500 hover:bg-purple-600',
    'Core Modules': 'bg-blue-500 hover:bg-blue-600',
    'Electives - First Additional Languages': 'bg-green-500 hover:bg-green-600',
  };

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
                  ? 'bg-white border-blue-500 text-blue-600 shadow-md'
                  : 'text-gray-600 hover:border-blue-300 hover:text-blue-500'
              }`}
            >
              Degree Year 1
            </button>
            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'certificate'
                  ? 'bg-white border-blue-500 text-blue-600 shadow-md'
                  : 'text-gray-600 hover:border-blue-300 hover:text-blue-500'
              }`}
            >
              Higher Certificate
            </button>
          </div>
        </div>

        {/* Accordion */}
        <div className="max-w-6xl mx-auto space-y-4">
          {/* All Modules Overview - First Accordion */}
          <div className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-md">
            {/* Accordion Header */}
            <button
              onClick={() => toggleCategory('All Modules')}
              className="w-full px-6 py-4 flex items-center justify-between text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold">All Modules</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-300 ${
                  openCategories['All Modules'] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Accordion Content */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openCategories['All Modules'] ? 'max-h-[2000px]' : 'max-h-0'
              }`}
            >
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
                {/* Semester Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Semester 1 */}
                  <div>
                    <h4 className="text-lg font-bold mb-4 flex items-center text-blue-900">
                      <Calendar className="w-5 h-5 mr-2" />
                      Semester 1
                    </h4>
                    <div className="space-y-3">
                      {modules
                        .filter(m => m.semester === 1)
                        .map((module) => (
                          <div
                            key={module.code}
                            className="bg-white rounded-lg p-4 shadow-sm border-2 border-blue-200 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                                {module.code}
                              </span>
                              {module.nqf && (
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                                  NQF {module.nqf}
                                </span>
                              )}
                            </div>
                            <h5 className="font-bold text-gray-900 mb-2 text-sm">{module.name}</h5>
                            <div className="flex items-center text-gray-600">
                              <Award className="w-4 h-4 mr-1 text-blue-500" />
                              <span className="text-sm font-semibold">{module.credits} Credits</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Semester 2 */}
                  <div>
                    <h4 className="text-lg font-bold mb-4 flex items-center text-cyan-900">
                      <Calendar className="w-5 h-5 mr-2" />
                      Semester 2
                    </h4>
                    <div className="space-y-3">
                      {modules
                        .filter(m => m.semester === 2)
                        .map((module) => (
                          <div
                            key={module.code}
                            className="bg-white rounded-lg p-4 shadow-sm border-2 border-cyan-200 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-bold">
                                {module.code}
                              </span>
                              {module.nqf && (
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                                  NQF {module.nqf}
                                </span>
                              )}
                            </div>
                            <h5 className="font-bold text-gray-900 mb-2 text-sm">{module.name}</h5>
                            <div className="flex items-center text-gray-600">
                              <Award className="w-4 h-4 mr-1 text-cyan-500" />
                              <span className="text-sm font-semibold">{module.credits} Credits</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Year Long Modules */}
                {modules.filter(m => m.semester === 0).length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-bold mb-4 flex items-center text-purple-900">
                      <Calendar className="w-5 h-5 mr-2" />
                      Year Long
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {modules
                        .filter(m => m.semester === 0)
                        .map((module) => (
                          <div
                            key={module.code}
                            className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-200 hover:shadow-md transition-shadow"
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-bold">
                                    {module.code}
                                  </span>
                                  {module.nqf && (
                                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                                      NQF {module.nqf}
                                    </span>
                                  )}
                                </div>
                                <h5 className="font-bold text-gray-900">{module.name}</h5>
                              </div>
                              <div className="flex items-center ml-4">
                                <Award className="w-5 h-5 mr-1 text-purple-500" />
                                <span className="font-bold text-gray-900">{module.credits}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Categorized Accordions */}
          {Object.entries(groupedModules).map(([category, semesters]) => (
            <div key={category} className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-md">
              {/* Accordion Header */}
              <button
                onClick={() => toggleCategory(category)}
                className={`w-full px-6 py-4 flex items-center justify-between text-white transition-all duration-300 ${
                  categoryHeaderColors[category] || 'bg-gray-500 hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center">
                  <BookOpen className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openCategories[category] ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openCategories[category] ? 'max-h-[2000px]' : 'max-h-0'
                }`}
              >
                <div className={`p-6 ${categoryColors[category] || 'bg-gray-50'}`}>
                  {/* Year Long Modules */}
                  {semesters.yearLong.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-4 flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        Year Long
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {semesters.yearLong.map((module) => (
                          <div
                            key={module.code}
                            className="bg-white rounded-lg p-4 shadow-sm border-2 border-gray-200 hover:shadow-md transition-shadow"
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                                    {module.code}
                                  </span>
                                  {module.nqf && (
                                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                                      NQF {module.nqf}
                                    </span>
                                  )}
                                </div>
                                <h5 className="font-bold text-gray-900">{module.name}</h5>
                              </div>
                              <div className="flex items-center ml-4">
                                <Award className="w-5 h-5 mr-1 text-blue-500" />
                                <span className="font-bold text-gray-900">{module.credits}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Semester Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Semester 1 */}
                    {semesters.semester1.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold mb-4 flex items-center">
                          <Calendar className="w-5 h-5 mr-2" />
                          Semester 1
                        </h4>
                        <div className="space-y-3">
                          {semesters.semester1.map((module) => (
                            <div
                              key={module.code}
                              className="bg-white rounded-lg p-4 shadow-sm border-2 border-gray-200 hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                                  {module.code}
                                </span>
                                {module.nqf && (
                                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                                    NQF {module.nqf}
                                  </span>
                                )}
                              </div>
                              <h5 className="font-bold text-gray-900 mb-2 text-sm">{module.name}</h5>
                              <div className="flex items-center text-gray-600">
                                <Award className="w-4 h-4 mr-1 text-blue-500" />
                                <span className="text-sm font-semibold">{module.credits} Credits</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Semester 2 */}
                    {semesters.semester2.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold mb-4 flex items-center">
                          <Calendar className="w-5 h-5 mr-2" />
                          Semester 2
                        </h4>
                        <div className="space-y-3">
                          {semesters.semester2.map((module) => (
                            <div
                              key={module.code}
                              className="bg-white rounded-lg p-4 shadow-sm border-2 border-gray-200 hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                                  {module.code}
                                </span>
                                {module.nqf && (
                                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                                    NQF {module.nqf}
                                  </span>
                                )}
                              </div>
                              <h5 className="font-bold text-gray-900 mb-2 text-sm">{module.name}</h5>
                              <div className="flex items-center text-gray-600">
                                <Award className="w-4 h-4 mr-1 text-blue-500" />
                                <span className="text-sm font-semibold">{module.credits} Credits</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Credits Summary */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg px-8 py-4 border-2 border-blue-200 shadow-lg">
            <p className="text-gray-600 mb-1 font-medium">Total Credits</p>
            <p className="text-3xl font-bold text-blue-700">
              {modules.reduce((sum, module) => sum + module.credits, 0)} Credits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDisplayEducation;

