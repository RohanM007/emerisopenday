import React, { useState } from 'react';
import { BookOpen, Award, Calendar, ChevronRight, Scale } from 'lucide-react';

const ModuleDisplayLaw = ({ degreeModules, higherCertModules }) => {
  const [activeTab, setActiveTab] = useState('degree');
  const [expandedCard, setExpandedCard] = useState(null);

  const modules = activeTab === 'degree' ? degreeModules : higherCertModules;

  const toggleCard = (code) => {
    setExpandedCard(expandedCard === code ? null : code);
  };

  // Group modules by semester
  const semester1 = modules.filter(m => m.semester === 1);
  const semester2 = modules.filter(m => m.semester === 2);
  const yearLong = modules.filter(m => m.semester === 0);

  return (
    <div className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl px-8 py-6 border-2 border-blue-200 shadow-lg">
            <div className="flex items-center justify-center mb-3">
              <Scale className="w-12 h-12 text-blue-600 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Year 1 Modules</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Click on any module to view detailed information
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-md p-1">
            <button
              onClick={() => setActiveTab('degree')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'degree'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Degree Year 1
            </button>
            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'certificate'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Higher Certificate
            </button>
          </div>
        </div>

        {/* Module Grid */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Semester 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-blue-900">
              <Calendar className="w-6 h-6 mr-3" />
              Semester 1
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {semester1.map((module) => (
                <div
                  key={module.code}
                  className="relative bg-white rounded-lg shadow-md border-2 border-blue-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Collapsed View */}
                  <button
                    onClick={() => toggleCard(module.code)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="flex items-center flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4 shadow-md">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{module.code}</h4>
                        <p className="text-sm text-gray-600">{module.credits} Credits</p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
                        expandedCard === module.code ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  {/* Expanded Panel - Slides Out */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedCard === module.code ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 pt-0 border-t-2 border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50">
                      {/* Legal Document Style */}
                      <div className="space-y-4">
                        {/* Module Name */}
                        <div className="border-l-4 border-blue-600 pl-4">
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Module Name</p>
                          <h5 className="font-bold text-gray-900 text-lg">{module.name}</h5>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          {/* Credits */}
                          <div className="bg-white rounded-lg p-3 border border-blue-200">
                            <div className="flex items-center mb-1">
                              <Award className="w-4 h-4 text-blue-600 mr-2" />
                              <p className="text-xs text-gray-500 uppercase">Credits</p>
                            </div>
                            <p className="font-bold text-blue-900 text-xl">{module.credits}</p>
                          </div>

                          {/* NQF Level */}
                          {module.nqf && (
                            <div className="bg-white rounded-lg p-3 border border-blue-200">
                              <div className="flex items-center mb-1">
                                <Scale className="w-4 h-4 text-blue-600 mr-2" />
                                <p className="text-xs text-gray-500 uppercase">NQF Level</p>
                              </div>
                              <p className="font-bold text-blue-900 text-xl">{module.nqf}</p>
                            </div>
                          )}
                        </div>

                        {/* Semester Badge */}
                        <div className="flex justify-end">
                          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                            Semester {module.semester}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Semester 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-cyan-900">
              <Calendar className="w-6 h-6 mr-3" />
              Semester 2
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {semester2.map((module) => (
                <div
                  key={module.code}
                  className="relative bg-white rounded-lg shadow-md border-2 border-cyan-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Collapsed View */}
                  <button
                    onClick={() => toggleCard(module.code)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-cyan-50 transition-colors duration-300"
                  >
                    <div className="flex items-center flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center mr-4 shadow-md">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{module.code}</h4>
                        <p className="text-sm text-gray-600">{module.credits} Credits</p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-6 h-6 text-cyan-600 transition-transform duration-300 ${
                        expandedCard === module.code ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  {/* Expanded Panel - Slides Out */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedCard === module.code ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 pt-0 border-t-2 border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50">
                      {/* Legal Document Style */}
                      <div className="space-y-4">
                        {/* Module Name */}
                        <div className="border-l-4 border-cyan-600 pl-4">
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Module Name</p>
                          <h5 className="font-bold text-gray-900 text-lg">{module.name}</h5>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          {/* Credits */}
                          <div className="bg-white rounded-lg p-3 border border-cyan-200">
                            <div className="flex items-center mb-1">
                              <Award className="w-4 h-4 text-cyan-600 mr-2" />
                              <p className="text-xs text-gray-500 uppercase">Credits</p>
                            </div>
                            <p className="font-bold text-cyan-900 text-xl">{module.credits}</p>
                          </div>

                          {/* NQF Level */}
                          {module.nqf && (
                            <div className="bg-white rounded-lg p-3 border border-cyan-200">
                              <div className="flex items-center mb-1">
                                <Scale className="w-4 h-4 text-cyan-600 mr-2" />
                                <p className="text-xs text-gray-500 uppercase">NQF Level</p>
                              </div>
                              <p className="font-bold text-cyan-900 text-xl">{module.nqf}</p>
                            </div>
                          )}
                        </div>

                        {/* Semester Badge */}
                        <div className="flex justify-end">
                          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                            Semester {module.semester}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Year Long Modules */}
          {yearLong.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center text-blue-900">
                <Calendar className="w-6 h-6 mr-3" />
                Year Long
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {yearLong.map((module) => (
                  <div
                    key={module.code}
                    className="relative bg-white rounded-lg shadow-md border-2 border-blue-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Collapsed View */}
                    <button
                      onClick={() => toggleCard(module.code)}
                      className="w-full p-5 flex items-center justify-between text-left hover:bg-blue-50 transition-colors duration-300"
                    >
                      <div className="flex items-center flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4 shadow-md">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">{module.code}</h4>
                          <p className="text-sm text-gray-600">{module.credits} Credits</p>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
                          expandedCard === module.code ? 'rotate-90' : ''
                        }`}
                      />
                    </button>

                    {/* Expanded Panel - Slides Out */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedCard === module.code ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="p-5 pt-0 border-t-2 border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50">
                        {/* Legal Document Style */}
                        <div className="space-y-4">
                          {/* Module Name */}
                          <div className="border-l-4 border-blue-600 pl-4">
                            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Module Name</p>
                            <h5 className="font-bold text-gray-900 text-lg">{module.name}</h5>
                          </div>

                          {/* Details Grid */}
                          <div className="grid grid-cols-2 gap-4">
                            {/* Credits */}
                            <div className="bg-white rounded-lg p-3 border border-blue-200">
                              <div className="flex items-center mb-1">
                                <Award className="w-4 h-4 text-blue-600 mr-2" />
                                <p className="text-xs text-gray-500 uppercase">Credits</p>
                              </div>
                              <p className="font-bold text-blue-900 text-xl">{module.credits}</p>
                            </div>

                            {/* NQF Level */}
                            {module.nqf && (
                              <div className="bg-white rounded-lg p-3 border border-blue-200">
                                <div className="flex items-center mb-1">
                                  <Scale className="w-4 h-4 text-blue-600 mr-2" />
                                  <p className="text-xs text-gray-500 uppercase">NQF Level</p>
                                </div>
                                <p className="font-bold text-blue-900 text-xl">{module.nqf}</p>
                              </div>
                            )}
                          </div>

                          {/* Year Long Badge */}
                          <div className="flex justify-end">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                              Year Long
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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

export default ModuleDisplayLaw;

