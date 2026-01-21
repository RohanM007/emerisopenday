import React, { useState } from 'react';
import { BookOpen, Award, Calendar, Library } from 'lucide-react';

const ModuleDisplayHumanities = ({ degreeModules, higherCertModules }) => {
  const [activeTab, setActiveTab] = useState('degree');
  const [pulledBook, setPulledBook] = useState(null);

  const modules = activeTab === 'degree' ? degreeModules : higherCertModules;

  const toggleBook = (code) => {
    setPulledBook(pulledBook === code ? null : code);
  };

  // Group modules by semester
  const semester1 = modules.filter(m => m.semester === 1);
  const semester2 = modules.filter(m => m.semester === 2);
  const yearLong = modules.filter(m => m.semester === 0);

  // Book spine colors - rich, literary palette
  const bookColors = [
    { spine: 'bg-gradient-to-r from-amber-700 to-amber-900', accent: 'bg-amber-600', text: 'text-amber-50', open: 'from-amber-50 to-orange-50' },
    { spine: 'bg-gradient-to-r from-red-700 to-red-900', accent: 'bg-red-600', text: 'text-red-50', open: 'from-red-50 to-pink-50' },
    { spine: 'bg-gradient-to-r from-purple-700 to-purple-900', accent: 'bg-purple-600', text: 'text-purple-50', open: 'from-purple-50 to-pink-50' },
    { spine: 'bg-gradient-to-r from-teal-700 to-teal-900', accent: 'bg-teal-600', text: 'text-teal-50', open: 'from-teal-50 to-cyan-50' },
    { spine: 'bg-gradient-to-r from-indigo-700 to-indigo-900', accent: 'bg-indigo-600', text: 'text-indigo-50', open: 'from-indigo-50 to-purple-50' },
  ];

  const getBookColor = (index) => bookColors[index % bookColors.length];

  return (
    <div className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Library className="w-12 h-12 text-amber-700 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Module Library</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on any book to pull it from the shelf and view module details
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-md p-1">
            <button
              onClick={() => setActiveTab('degree')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'degree'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              Degree Year 1
            </button>
            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'certificate'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              Higher Certificate
            </button>
          </div>
        </div>

        {/* Bookshelf Content */}
        {activeTab === 'degree' && (
          <div className="max-w-6xl mx-auto space-y-12">
          {/* Semester 1 Shelf */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-amber-900">
              <Calendar className="w-6 h-6 mr-3" />
              Semester 1 Shelf
            </h3>
            {/* Shelf Container */}
            <div className="relative bg-gradient-to-b from-amber-900 to-amber-950 rounded-lg p-6 shadow-2xl">
              {/* Books on Shelf */}
              <div className="flex items-end justify-center gap-3 min-h-[280px]">
              {semester1.map((module, index) => {
                const bookColor = getBookColor(index);
                const isPulled = pulledBook === module.code;
                
                return (
                  <div key={module.code} className="relative group">
                    {/* Book Spine (Closed) */}
                    <button
                      onClick={() => toggleBook(module.code)}
                      className={`relative ${bookColor.spine} rounded-sm shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer
                        ${isPulled ? 'transform -translate-y-8 scale-110 z-50' : 'hover:-translate-y-2'}
                        ${isPulled ? 'w-64' : 'w-16'} h-64`}
                      style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      {!isPulled ? (
                        // Book Spine View
                        <div className="h-full flex flex-col items-center justify-center p-2 relative">
                          {/* Decorative Lines */}
                          <div className={`absolute top-2 left-2 right-2 h-1 ${bookColor.accent} rounded`}></div>
                          <div className={`absolute bottom-2 left-2 right-2 h-1 ${bookColor.accent} rounded`}></div>

                          {/* Module Code (Vertical) */}
                          <div className="flex-1 flex items-center justify-center">
                            <p className={`${bookColor.text} font-bold text-sm writing-mode-vertical transform rotate-180 tracking-wider`}
                               style={{ writingMode: 'vertical-rl' }}>
                              {module.code}
                            </p>
                          </div>

                          {/* Book Icon */}
                          <BookOpen className={`${bookColor.text} w-6 h-6 mb-2`} />
                        </div>
                      ) : (
                        // Book Open View
                        <div className={`h-full bg-gradient-to-br ${bookColor.open} rounded-lg p-4 overflow-y-auto border-4 ${bookColor.spine}`}>
                          {/* Book Header */}
                          <div className="mb-3 pb-3 border-b-2 border-amber-300">
                            <div className="flex items-center justify-between mb-2">
                              <span className={`${bookColor.spine} ${bookColor.text} px-3 py-1 rounded text-xs font-bold`}>
                                {module.code}
                              </span>
                              <BookOpen className="w-5 h-5 text-amber-700" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm leading-tight">
                              {module.name}
                            </h4>
                          </div>

                          {/* Book Content */}
                          <div className="space-y-2 text-xs">
                            {/* Credits */}
                            <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                              <div className="flex items-center">
                                <Award className="w-4 h-4 text-amber-700 mr-1" />
                                <span className="font-semibold text-gray-700">Credits</span>
                              </div>
                              <span className="font-bold text-amber-900">{module.credits}</span>
                            </div>

                            {/* NQF Level */}
                            {module.nqf && (
                              <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                                <div className="flex items-center">
                                  <Library className="w-4 h-4 text-amber-700 mr-1" />
                                  <span className="font-semibold text-gray-700">NQF Level</span>
                                </div>
                                <span className="font-bold text-amber-900">{module.nqf}</span>
                              </div>
                            )}

                            {/* Semester */}
                            <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 text-amber-700 mr-1" />
                                <span className="font-semibold text-gray-700">Semester</span>
                              </div>
                              <span className="font-bold text-amber-900">{module.semester}</span>
                            </div>
                          </div>

                          {/* Decorative Page Corner */}
                          <div className="absolute bottom-0 right-0 w-8 h-8 bg-amber-200 opacity-50"
                               style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}
              </div>
              {/* Shelf Bottom */}
              <div className="h-3 bg-gradient-to-b from-amber-950 to-amber-900 rounded-b-lg shadow-inner"></div>
            </div>
          </div>

          {/* Semester 2 Shelf */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-red-900">
              <Calendar className="w-6 h-6 mr-3" />
              Semester 2 Shelf
            </h3>
            {/* Shelf Container */}
            <div className="relative bg-gradient-to-b from-red-900 to-red-950 rounded-lg p-6 shadow-2xl">
              {/* Books on Shelf */}
              <div className="flex items-end justify-center gap-3 min-h-[280px]">
              {semester2.map((module, index) => {
                const bookColor = getBookColor(index);
                const isPulled = pulledBook === module.code;

                return (
                  <div key={module.code} className="relative group">
                    {/* Book Spine (Closed) */}
                    <button
                      onClick={() => toggleBook(module.code)}
                      className={`relative ${bookColor.spine} rounded-sm shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer
                        ${isPulled ? 'transform -translate-y-8 scale-110 z-50' : 'hover:-translate-y-2'}
                        ${isPulled ? 'w-64' : 'w-16'} h-64`}
                      style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      {!isPulled ? (
                        // Book Spine View
                        <div className="h-full flex flex-col items-center justify-center p-2 relative">
                          {/* Decorative Lines */}
                          <div className={`absolute top-2 left-2 right-2 h-1 ${bookColor.accent} rounded`}></div>
                          <div className={`absolute bottom-2 left-2 right-2 h-1 ${bookColor.accent} rounded`}></div>

                          {/* Module Code (Vertical) */}
                          <div className="flex-1 flex items-center justify-center">
                            <p className={`${bookColor.text} font-bold text-sm writing-mode-vertical transform rotate-180 tracking-wider`}
                               style={{ writingMode: 'vertical-rl' }}>
                              {module.code}
                            </p>
                          </div>

                          {/* Book Icon */}
                          <BookOpen className={`${bookColor.text} w-6 h-6 mb-2`} />
                        </div>
                      ) : (
                        // Book Open View
                        <div className={`h-full bg-gradient-to-br ${bookColor.open} rounded-lg p-4 overflow-y-auto border-4 ${bookColor.spine}`}>
                          {/* Book Header */}
                          <div className="mb-3 pb-3 border-b-2 border-amber-300">
                            <div className="flex items-center justify-between mb-2">
                              <span className={`${bookColor.spine} ${bookColor.text} px-3 py-1 rounded text-xs font-bold`}>
                                {module.code}
                              </span>
                              <BookOpen className="w-5 h-5 text-amber-700" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm leading-tight">
                              {module.name}
                            </h4>
                          </div>

                          {/* Book Content */}
                          <div className="space-y-2 text-xs">
                            {/* Credits */}
                            <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                              <div className="flex items-center">
                                <Award className="w-4 h-4 text-amber-700 mr-1" />
                                <span className="font-semibold text-gray-700">Credits</span>
                              </div>
                              <span className="font-bold text-amber-900">{module.credits}</span>
                            </div>

                            {/* NQF Level */}
                            {module.nqf && (
                              <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                                <div className="flex items-center">
                                  <Library className="w-4 h-4 text-amber-700 mr-1" />
                                  <span className="font-semibold text-gray-700">NQF Level</span>
                                </div>
                                <span className="font-bold text-amber-900">{module.nqf}</span>
                              </div>
                            )}

                            {/* Semester */}
                            <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 text-amber-700 mr-1" />
                                <span className="font-semibold text-gray-700">Semester</span>
                              </div>
                              <span className="font-bold text-amber-900">{module.semester}</span>
                            </div>
                          </div>

                          {/* Decorative Page Corner */}
                          <div className="absolute bottom-0 right-0 w-8 h-8 bg-amber-200 opacity-50"
                               style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}
              </div>
              {/* Shelf Bottom */}
              <div className="h-3 bg-gradient-to-b from-red-950 to-red-900 rounded-b-lg shadow-inner"></div>
            </div>
          </div>

          {/* Year Long Shelf */}
          {yearLong.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center text-purple-900">
                <Calendar className="w-6 h-6 mr-3" />
                Year Long Shelf
              </h3>
              {/* Shelf Container */}
              <div className="relative bg-gradient-to-b from-purple-900 to-purple-950 rounded-lg p-6 shadow-2xl">
                {/* Books on Shelf */}
                <div className="flex items-end justify-center gap-3 min-h-[280px]">
                {yearLong.map((module, index) => {
                  const bookColor = getBookColor(index);
                  const isPulled = pulledBook === module.code;

                  return (
                    <div key={module.code} className="relative group">
                      {/* Book Spine (Closed) */}
                      <button
                        onClick={() => toggleBook(module.code)}
                        className={`relative ${bookColor.spine} rounded-sm shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer
                          ${isPulled ? 'transform -translate-y-8 scale-110 z-50' : 'hover:-translate-y-2'}
                          ${isPulled ? 'w-64' : 'w-16'} h-64`}
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: '1000px'
                        }}
                      >
                        {!isPulled ? (
                          // Book Spine View
                          <div className="h-full flex flex-col items-center justify-center p-2 relative">
                            {/* Decorative Lines */}
                            <div className={`absolute top-2 left-2 right-2 h-1 ${bookColor.accent} rounded`}></div>
                            <div className={`absolute bottom-2 left-2 right-2 h-1 ${bookColor.accent} rounded`}></div>

                            {/* Module Code (Vertical) */}
                            <div className="flex-1 flex items-center justify-center">
                              <p className={`${bookColor.text} font-bold text-sm writing-mode-vertical transform rotate-180 tracking-wider`}
                                 style={{ writingMode: 'vertical-rl' }}>
                                {module.code}
                              </p>
                            </div>

                            {/* Book Icon */}
                            <BookOpen className={`${bookColor.text} w-6 h-6 mb-2`} />
                          </div>
                        ) : (
                          // Book Open View
                          <div className={`h-full bg-gradient-to-br ${bookColor.open} rounded-lg p-4 overflow-y-auto border-4 ${bookColor.spine}`}>
                            {/* Book Header */}
                            <div className="mb-3 pb-3 border-b-2 border-amber-300">
                              <div className="flex items-center justify-between mb-2">
                                <span className={`${bookColor.spine} ${bookColor.text} px-3 py-1 rounded text-xs font-bold`}>
                                  {module.code}
                                </span>
                                <BookOpen className="w-5 h-5 text-amber-700" />
                              </div>
                              <h4 className="font-bold text-gray-900 text-sm leading-tight">
                                {module.name}
                              </h4>
                            </div>

                            {/* Book Content */}
                            <div className="space-y-2 text-xs">
                              {/* Credits */}
                              <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                                <div className="flex items-center">
                                  <Award className="w-4 h-4 text-amber-700 mr-1" />
                                  <span className="font-semibold text-gray-700">Credits</span>
                                </div>
                                <span className="font-bold text-amber-900">{module.credits}</span>
                              </div>

                              {/* NQF Level */}
                              {module.nqf && (
                                <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                                  <div className="flex items-center">
                                    <Library className="w-4 h-4 text-amber-700 mr-1" />
                                    <span className="font-semibold text-gray-700">NQF Level</span>
                                  </div>
                                  <span className="font-bold text-amber-900">{module.nqf}</span>
                                </div>
                              )}

                              {/* Year Long Badge */}
                              <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 text-amber-700 mr-1" />
                                  <span className="font-semibold text-gray-700">Duration</span>
                                </div>
                                <span className="font-bold text-amber-900 text-xs">Year Long</span>
                              </div>
                            </div>

                            {/* Decorative Page Corner */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 bg-amber-200 opacity-50"
                                 style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
                          </div>
                        )}
                      </button>
                    </div>
                  );
                })}
                </div>
                {/* Shelf Bottom */}
                <div className="h-3 bg-gradient-to-b from-purple-950 to-purple-900 rounded-b-lg shadow-inner"></div>
              </div>
            </div>
          )}

          {/* Total Credits Summary */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-orange-50 to-red-50 rounded-lg px-8 py-4 border-2 border-orange-200 shadow-lg">
              <p className="text-gray-600 mb-1 font-medium">Total Credits</p>
              <p className="text-3xl font-bold text-orange-700">
                {modules.reduce((sum, module) => sum + module.credits, 0)} Credits
              </p>
            </div>
          </div>
          </div>
        )}

        {/* Higher Certificate Bookshelf */}
        {activeTab === 'certificate' && (
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Semester 1 Shelf */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center text-amber-900">
                <Calendar className="w-6 h-6 mr-3" />
                Semester 1 Shelf
              </h3>
              {/* Shelf Container */}
              <div className="relative bg-gradient-to-b from-amber-900 to-amber-950 rounded-lg p-6 shadow-2xl">
                {/* Books on Shelf */}
                <div className="flex items-end justify-center gap-3 min-h-[280px]">
                {semester1.map((module, index) => {
                  const bookColor = getBookColor(index);
                  const isPulled = pulledBook === module.code;

                  return (
                    <div key={module.code} className="relative group">
                      {/* Book Spine (Closed) */}
                      <button
                        onClick={() => toggleBook(module.code)}
                        className={`relative ${bookColor.spine} rounded-sm shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer
                          ${isPulled ? 'transform -translate-y-8 scale-110 z-50' : 'hover:-translate-y-2'}
                          ${isPulled ? 'w-64' : 'w-16'} h-64`}
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: '1000px'
                        }}
                      >
                        {!isPulled ? (
                          // Book Spine View
                          <div className="h-full flex flex-col items-center justify-center p-2 relative">
                            {/* Decorative Lines */}
                            <div className={`absolute top-2 left-2 right-2 h-1 ${bookColor.accent} rounded`}></div>
                            <div className={`absolute bottom-2 left-2 right-2 h-1 ${bookColor.accent} rounded`}></div>

                            {/* Module Code (Vertical) */}
                            <div className="flex-1 flex items-center justify-center">
                              <p className={`${bookColor.text} font-bold text-sm writing-mode-vertical transform rotate-180 tracking-wider`}
                                 style={{ writingMode: 'vertical-rl' }}>
                                {module.code}
                              </p>
                            </div>

                            {/* Book Icon */}
                            <BookOpen className={`${bookColor.text} w-6 h-6 mb-2`} />
                          </div>
                        ) : (
                          // Book Open View
                          <div className={`h-full bg-gradient-to-br ${bookColor.open} rounded-lg p-4 overflow-y-auto border-4 ${bookColor.spine}`}>
                            {/* Book Header */}
                            <div className="mb-3 pb-3 border-b-2 border-amber-300">
                              <div className="flex items-center justify-between mb-2">
                                <span className={`${bookColor.spine} ${bookColor.text} px-3 py-1 rounded text-xs font-bold`}>
                                  {module.code}
                                </span>
                                <BookOpen className="w-5 h-5 text-amber-700" />
                              </div>
                              <h4 className="font-bold text-gray-900 text-sm leading-tight">
                                {module.name}
                              </h4>
                            </div>

                            {/* Book Content */}
                            <div className="space-y-2 text-xs">
                              {/* Credits */}
                              <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                                <div className="flex items-center">
                                  <Award className="w-4 h-4 text-amber-700 mr-1" />
                                  <span className="font-semibold text-gray-700">Credits</span>
                                </div>
                                <span className="font-bold text-amber-900">{module.credits}</span>
                              </div>

                              {/* NQF Level */}
                              {module.nqf && (
                                <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                                  <div className="flex items-center">
                                    <Library className="w-4 h-4 text-amber-700 mr-1" />
                                    <span className="font-semibold text-gray-700">NQF Level</span>
                                  </div>
                                  <span className="font-bold text-amber-900">{module.nqf}</span>
                                </div>
                              )}

                              {/* Semester */}
                              <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 text-amber-700 mr-1" />
                                  <span className="font-semibold text-gray-700">Semester</span>
                                </div>
                                <span className="font-bold text-amber-900">{module.semester}</span>
                              </div>
                            </div>

                            {/* Decorative Page Corner */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 bg-amber-200 opacity-50"
                                 style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
                          </div>
                        )}
                      </button>
                    </div>
                  );
                })}
                </div>
                {/* Shelf Bottom */}
                <div className="h-3 bg-gradient-to-b from-amber-950 to-amber-900 rounded-b-lg shadow-inner"></div>
              </div>
            </div>

            {/* Semester 2 Shelf */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center text-red-900">
                <Calendar className="w-6 h-6 mr-3" />
                Semester 2 Shelf
              </h3>
              {/* Shelf Container */}
              <div className="relative bg-gradient-to-b from-red-900 to-red-950 rounded-lg p-6 shadow-2xl">
                {/* Books on Shelf */}
                <div className="flex items-end justify-center gap-3 min-h-[280px]">
                {semester2.map((module, index) => {
                  const bookColor = getBookColor(index);
                  const isPulled = pulledBook === module.code;

                  return (
                    <div key={module.code} className="relative group">
                      {/* Book Spine (Closed) */}
                      <button
                        onClick={() => toggleBook(module.code)}
                        className={`relative ${bookColor.spine} rounded-sm shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer
                          ${isPulled ? 'transform -translate-y-8 scale-110 z-50' : 'hover:-translate-y-2'}
                          ${isPulled ? 'w-64' : 'w-16'} h-64`}
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: '1000px'
                        }}
                      >
                        {!isPulled ? (
                          // Book Spine View
                          <div className="h-full flex flex-col items-center justify-center p-2 relative">
                            {/* Decorative Lines */}
                            <div className={`absolute top-2 left-2 right-2 h-1 ${bookColor.accent} rounded`}></div>
                            <div className={`absolute bottom-2 left-2 right-2 h-1 ${bookColor.accent} rounded`}></div>

                            {/* Module Code (Vertical) */}
                            <div className="flex-1 flex items-center justify-center">
                              <p className={`${bookColor.text} font-bold text-sm writing-mode-vertical transform rotate-180 tracking-wider`}
                                 style={{ writingMode: 'vertical-rl' }}>
                                {module.code}
                              </p>
                            </div>

                            {/* Book Icon */}
                            <BookOpen className={`${bookColor.text} w-6 h-6 mb-2`} />
                          </div>
                        ) : (
                          // Book Open View
                          <div className={`h-full bg-gradient-to-br ${bookColor.open} rounded-lg p-4 overflow-y-auto border-4 ${bookColor.spine}`}>
                            {/* Book Header */}
                            <div className="mb-3 pb-3 border-b-2 border-amber-300">
                              <div className="flex items-center justify-between mb-2">
                                <span className={`${bookColor.spine} ${bookColor.text} px-3 py-1 rounded text-xs font-bold`}>
                                  {module.code}
                                </span>
                                <BookOpen className="w-5 h-5 text-amber-700" />
                              </div>
                              <h4 className="font-bold text-gray-900 text-sm leading-tight">
                                {module.name}
                              </h4>
                            </div>

                            {/* Book Content */}
                            <div className="space-y-2 text-xs">
                              {/* Credits */}
                              <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                                <div className="flex items-center">
                                  <Award className="w-4 h-4 text-amber-700 mr-1" />
                                  <span className="font-semibold text-gray-700">Credits</span>
                                </div>
                                <span className="font-bold text-amber-900">{module.credits}</span>
                              </div>

                              {/* NQF Level */}
                              {module.nqf && (
                                <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                                  <div className="flex items-center">
                                    <Library className="w-4 h-4 text-amber-700 mr-1" />
                                    <span className="font-semibold text-gray-700">NQF Level</span>
                                  </div>
                                  <span className="font-bold text-amber-900">{module.nqf}</span>
                                </div>
                              )}

                              {/* Semester */}
                              <div className="flex items-center justify-between bg-white bg-opacity-60 rounded p-2">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 text-amber-700 mr-1" />
                                  <span className="font-semibold text-gray-700">Semester</span>
                                </div>
                                <span className="font-bold text-amber-900">{module.semester}</span>
                              </div>
                            </div>

                            {/* Decorative Page Corner */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 bg-amber-200 opacity-50"
                                 style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
                          </div>
                        )}
                      </button>
                    </div>
                  );
                })}
                </div>
                {/* Shelf Bottom */}
                <div className="h-3 bg-gradient-to-b from-red-950 to-red-900 rounded-b-lg shadow-inner"></div>
              </div>
            </div>

            {/* Total Credits Summary */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-gradient-to-r from-orange-50 to-red-50 rounded-lg px-8 py-4 border-2 border-orange-200 shadow-lg">
                <p className="text-gray-600 mb-1 font-medium">Total Credits</p>
                <p className="text-3xl font-bold text-orange-700">
                  {modules.reduce((sum, module) => sum + module.credits, 0)} Credits
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleDisplayHumanities;

