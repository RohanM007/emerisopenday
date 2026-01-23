import { useState, useEffect, useRef } from 'react';
import { TrendingUp, DollarSign, Target, BarChart3, Briefcase, GraduationCap, ArrowRight, CheckCircle2, Sparkles, BookOpen, RotateCw } from 'lucide-react';

const CareerPathSelector = ({ preSelectedPath = null, showQuizPrompt = true }) => {
  const [selectedPath, setSelectedPath] = useState(preSelectedPath);
  const [visibleSteps, setVisibleSteps] = useState(new Set());

  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const selectorRef = useRef(null); // Reference to the specialization selector

  const careerPaths = [
    {
      id: 'strategic',
      name: 'Strategic Management',
      icon: Target,
      color: 'from-purple-500 to-pink-600',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      glowColor: 'shadow-purple-500/50',
      description: 'Analyse business environments, set long-term goals, and develop competitive strategies for success, sustainability, and innovation',
      year2_3: ['Project Management', 'Retail Management', 'Supply Chain Management', 'Enterprise Risk Management'],
      jobs: [
        { title: 'Junior Strategist', icon: '🎯' },
        { title: 'New Business Developer / Account Manager', icon: '💼' },
        { title: 'Business Consulting', icon: '📊' },
        { title: 'General Business Management', icon: '🏢' }
      ]
    },
    {
      id: 'finance',
      name: 'Finance and Accounting',
      icon: DollarSign,
      color: 'from-amber-500 to-yellow-600',
      borderColor: 'border-amber-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
      glowColor: 'shadow-amber-500/50',
      description: 'Build technical and analytical skills in managing financial records, reporting, compliance, and interpreting financial statements',
      year2_3: ['Accounting 2A & 2B', 'Accounting 3A & 3B', 'Taxation'],
      jobs: [
        { title: 'Corporate Accounting', icon: '💰' },
        { title: 'Financial Manager', icon: '📊' },
        { title: 'Investment Analyst', icon: '📈' },
        { title: 'Business Consulting', icon: '💼' }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Management',
      icon: TrendingUp,
      color: 'from-rose-500 to-pink-600',
      borderColor: 'border-rose-500',
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-700',
      glowColor: 'shadow-rose-500/50',
      description: 'Understand customer needs, create value, build strong brands, and design effective marketing strategies that drive business growth',
      year2_3: ['Marketing 2A & 2B', 'Marketing 3A & 3B', 'Digital Marketing'],
      jobs: [
        { title: 'New Business Developer / Account Manager', icon: '💼' },
        { title: 'Business Consulting', icon: '📊' },
        { title: 'Market Research', icon: '🔍' },
        { title: 'General Management', icon: '🏢' },
        { title: 'Sales Advisor', icon: '🎯' }
      ]
    },
    {
      id: 'financial-mgmt',
      name: 'Financial Management',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-600',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      glowColor: 'shadow-blue-500/50',
      description: 'Plan, control, and allocate financial resources effectively through investment decisions, capital budgeting, and risk management',
      year2_3: ['Financial Management 2A & 2B', 'Financial Management 3A & 3B', 'Quantitative Techniques'],
      jobs: [
        { title: 'Financial Manager', icon: '💎' },
        { title: 'Investment Analyst', icon: '📊' }
      ]
    }
  ];

  const selectedPathData = careerPaths.find(p => p.id === selectedPath);

  // Handle pre-selected path from quiz
  useEffect(() => {
    if (preSelectedPath && preSelectedPath !== selectedPath) {
      setSelectedPath(preSelectedPath);
      setVisibleSteps(new Set([1]));

      // Scroll to timeline after a short delay
      setTimeout(() => {
        step1Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    }
  }, [preSelectedPath]);

  // Scroll-based reveal effect
  useEffect(() => {
    if (!selectedPath) return;

    const observerOptions = {
      root: null,
      rootMargin: '-100px',
      threshold: 0.3
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepNumber = entry.target.dataset.step;
          setVisibleSteps(prev => new Set([...prev, parseInt(stepNumber)]));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all step elements
    if (step1Ref.current) observer.observe(step1Ref.current);
    if (step2Ref.current) observer.observe(step2Ref.current);
    if (step3Ref.current) observer.observe(step3Ref.current);
    if (step4Ref.current) observer.observe(step4Ref.current);

    return () => observer.disconnect();
  }, [selectedPath]);

  const handlePathSelect = (pathId) => {
    setSelectedPath(pathId);
    setVisibleSteps(new Set([1])); // Show first step immediately

    // Smooth scroll to timeline after selection
    setTimeout(() => {
      step1Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 relative z-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl px-8 py-6 border-2 border-green-300 shadow-lg mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              <Sparkles className="inline-block mr-2 text-green-600" size={40} />
              Your Career Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore your path from first year to your dream career
            </p>
          </div>
        </div>

        {/* Step 1: Choose Your Path */}
        <div className="mb-16" ref={selectorRef}>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-800">Choose Your Specialization</h3>
              <p className="text-gray-600">After completing first year, select your path</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((path) => {
              const Icon = path.icon;
              const isSelected = selectedPath === path.id;

              return (
                <div
                  key={path.id}
                  onClick={() => handlePathSelect(path.id)}
                  className={`cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    isSelected ? 'scale-105' : ''
                  }`}
                >
                  <div className={`bg-white rounded-xl shadow-lg p-6 border-2 ${
                    isSelected ? path.borderColor + ' shadow-2xl ' + path.glowColor : 'border-gray-200'
                  } hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                    {isSelected && (
                      <div className={`absolute top-2 right-2 bg-gradient-to-br ${path.color} rounded-full p-1`}>
                        <CheckCircle2 className="text-white" size={20} />
                      </div>
                    )}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${path.color} flex items-center justify-center mb-4 mx-auto ${
                      isSelected ? 'animate-pulse' : ''
                    }`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                      {path.name}
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                      {path.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Journey */}
        {selectedPath && selectedPathData && (
          <div className="max-w-7xl mx-auto relative">
            {/* Sticky Progress Indicator */}
            <div className="hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 z-20">
              <div className="bg-white rounded-full shadow-2xl p-4 border-2 border-green-200">
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center justify-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                        visibleSteps.has(step)
                          ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg scale-110'
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Connecting Line - Animated (REMOVED - was causing visual issues) */}
            <div className="relative">

              {/* Step 1: Your Choice */}
              <div
                ref={step1Ref}
                data-step="1"
                className={`mb-40 transition-all duration-700 ${visibleSteps.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="flex flex-col md:flex-row items-center justify-center mb-10">
                  <div className={`bg-gradient-to-br ${selectedPathData.color} text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-2xl relative z-10 ${
                    visibleSteps.has(1) ? 'animate-pulse' : ''
                  }`}>
                    1
                  </div>
                  <div className="ml-6 text-center md:text-left mt-4 md:mt-0">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Your Chosen Path</h3>
                    <p className="text-lg text-gray-600 mt-1">You've selected {selectedPathData.name}</p>
                  </div>
                </div>

                <div className={`bg-gradient-to-br ${selectedPathData.bgColor} from-white rounded-3xl shadow-2xl p-10 md:p-12 border-4 ${selectedPathData.borderColor} relative overflow-hidden`}>
                  {/* Decorative background pattern */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/50 to-transparent rounded-full blur-3xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      {(() => {
                        const Icon = selectedPathData.icon;
                        return (
                          <div className={`bg-gradient-to-br ${selectedPathData.color} rounded-full p-6 shadow-xl`}>
                            <Icon className="text-white" size={64} />
                          </div>
                        );
                      })()}
                    </div>
                    <h4 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">{selectedPathData.name}</h4>
                    <p className="text-gray-700 text-center text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">{selectedPathData.description}</p>
                    <div className="mt-8 text-center">
                      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                        <Sparkles className="text-green-600 animate-pulse" size={20} />
                        <p className="text-gray-700 font-semibold">Scroll down to see your journey unfold</p>
                        <span className="text-2xl">↓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Next 2 Years Modules */}
              <div
                ref={step2Ref}
                data-step="2"
                className={`mb-40 transition-all duration-700 ${visibleSteps.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="flex flex-col md:flex-row items-center justify-center mb-10">
                  <div className={`bg-gradient-to-br ${selectedPathData.color} text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-2xl relative z-10 ${
                    visibleSteps.has(2) ? 'animate-pulse' : ''
                  }`}>
                    2
                  </div>
                  <div className="ml-6 text-center md:text-left mt-4 md:mt-0">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Study for the Next 2 Years</h3>
                    <p className="text-lg text-gray-600 mt-1">Specialize in {selectedPathData.name}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-10 md:p-12 border-2 border-gray-200 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${selectedPathData.color} opacity-10 rounded-full blur-3xl`}></div>
                  <div className={`absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br ${selectedPathData.color} opacity-10 rounded-full blur-3xl`}></div>

                  <div className="relative z-10">
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
                      <BookOpen className={selectedPathData.textColor} size={32} />
                      Key Modules You'll Study
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {selectedPathData.year2_3.map((module, index) => (
                        <div
                          key={index}
                          className={`bg-white rounded-xl p-6 shadow-lg border-2 ${selectedPathData.borderColor} transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ${
                            visibleSteps.has(2) ? 'animate-fadeIn' : ''
                          }`}
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedPathData.color} flex items-center justify-center mb-4 shadow-lg`}>
                            <CheckCircle2 className="text-white" size={24} />
                          </div>
                          <h5 className="font-bold text-gray-800 text-lg leading-snug">{module}</h5>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Graduate */}
              <div
                ref={step3Ref}
                data-step="3"
                className={`mb-40 transition-all duration-700 ${visibleSteps.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="flex flex-col md:flex-row items-center justify-center mb-10">
                  <div className={`bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-2xl relative z-10 ${
                    visibleSteps.has(3) ? 'animate-pulse' : ''
                  }`}>
                    3
                  </div>
                  <div className="ml-6 text-center md:text-left mt-4 md:mt-0">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Graduate with Your Degree</h3>
                    <p className="text-lg text-gray-600 mt-1">Complete your BCom and enter the workforce</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 rounded-3xl shadow-2xl p-12 md:p-16 border-4 border-yellow-300 text-center relative overflow-hidden">
                  {/* Celebration elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-br ${i % 3 === 0 ? 'from-yellow-400 to-orange-500' : i % 3 === 1 ? 'from-pink-400 to-rose-500' : 'from-blue-400 to-cyan-500'} rounded-full ${
                          visibleSteps.has(3) ? 'animate-ping' : 'opacity-0'
                        }`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-8 inline-block shadow-2xl mb-6">
                      <GraduationCap className="text-white" size={80} />
                    </div>
                    <h4 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">🎓 Congratulations!</h4>
                    <p className="text-gray-700 text-xl md:text-2xl font-semibold">You've earned your BCom degree in</p>
                    <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${selectedPathData.color} bg-clip-text text-transparent mt-2`}>
                      {selectedPathData.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4: Career Opportunities */}
              <div
                ref={step4Ref}
                data-step="4"
                className={`transition-all duration-700 ${visibleSteps.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="flex flex-col md:flex-row items-center justify-center mb-10">
                  <div className={`bg-gradient-to-br ${selectedPathData.color} text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-2xl relative z-10 ${
                    visibleSteps.has(4) ? 'animate-pulse' : ''
                  }`}>
                    4
                  </div>
                  <div className="ml-6 text-center md:text-left mt-4 md:mt-0">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Launch Your Career</h3>
                    <p className="text-lg text-gray-600 mt-1">Top career opportunities await you</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-10 md:p-12 border-2 border-gray-200 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${selectedPathData.color} opacity-10 rounded-full blur-3xl`}></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-10">
                      <div className={`bg-gradient-to-br ${selectedPathData.color} rounded-full p-4 shadow-xl`}>
                        <Briefcase className="text-white" size={40} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 ml-4">
                        Career Opportunities
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      {selectedPathData.jobs.map((job, index) => (
                        <div
                          key={index}
                          className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 ${selectedPathData.borderColor} hover:border-4 relative overflow-hidden ${
                            visibleSteps.has(4) ? 'animate-fadeIn' : ''
                          }`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {/* Hover gradient overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${selectedPathData.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                          <div className="relative z-10">
                            <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{job.icon}</div>
                            <h4 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                              {job.title}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center pt-6 border-t-2 border-gray-200">
                      <button
                        onClick={() => {
                          setSelectedPath(null);
                          setVisibleSteps(new Set());
                          // Scroll to the specialization selector instead of top
                          setTimeout(() => {
                            selectorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }, 100);
                        }}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
                      >
                        <RotateCw size={20} />
                        Explore Another Path
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        {!selectedPath && (
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg flex items-center justify-center">
              <Sparkles className="text-green-600 mr-2" size={24} />
              Click on a career path above to see your journey from student to professional
              <Sparkles className="text-green-600 ml-2" size={24} />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerPathSelector;

