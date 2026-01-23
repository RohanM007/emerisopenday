import { useState } from 'react';
import { BookOpen, Brain, Radio, Feather, Sparkles } from 'lucide-react';

const HumanitiesCareerGallery = () => {
  const [selectedPath, setSelectedPath] = useState(null);
  const [hoveredCareer, setHoveredCareer] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const disciplinePaths = [
    {
      id: 'english-comm',
      name: 'English & Communication Science',
      shortName: 'English + Communication',
      icon1: BookOpen,
      icon2: Radio,
      color: 'from-humanities-forest to-humanities-coral',
      careers: [
        {
          id: 'authoring-1',
          title: 'Authoring',
          icon: '✍️',
          description: 'Craft compelling narratives, novels, articles, and creative content that captivate readers and shape cultural conversations.',
          skills: ['Creative Writing', 'Storytelling', 'Research', 'Editing'],
          postgrad: false,
          frameColor: 'border-humanities-burgundy',
          depth: 2 // Forward
        },
        {
          id: 'media-consulting',
          title: 'Media Consulting',
          icon: '📺',
          description: 'Advise organizations on strategic communication, brand messaging, and media relations to build powerful public narratives.',
          skills: ['Strategic Communication', 'Media Relations', 'Brand Strategy', 'Public Speaking'],
          postgrad: false,
          frameColor: 'border-humanities-gold',
          depth: 1 // Middle
        },
        {
          id: 'research-1',
          title: 'Research',
          icon: '🔍',
          description: 'Investigate language, media, and cultural trends to contribute to academic knowledge and inform policy decisions.',
          skills: ['Critical Analysis', 'Academic Writing', 'Data Collection', 'Literature Review'],
          postgrad: false,
          frameColor: 'border-humanities-coral',
          depth: 1 // Middle
        },
        {
          id: 'comm-management',
          title: 'Communication Management',
          icon: '💼',
          description: 'Lead corporate and organizational communication strategies, managing internal and external messaging at the highest level.',
          skills: ['Leadership', 'Strategic Planning', 'Crisis Communication', 'Team Management'],
          postgrad: false,
          frameColor: 'border-humanities-forest',
          depth: 2 // Forward
        }
      ]
    },
    {
      id: 'english-psych',
      name: 'English & Psychology',
      shortName: 'English + Psychology',
      icon1: BookOpen,
      icon2: Brain,
      color: 'from-humanities-forest to-humanities-purple',
      careers: [
        {
          id: 'authoring-2',
          title: 'Authoring',
          icon: '✍️',
          description: 'Write with deep psychological insight, creating characters and narratives that explore the complexities of the human mind.',
          skills: ['Psychological Insight', 'Character Development', 'Narrative Structure', 'Empathy'],
          postgrad: false,
          frameColor: 'border-humanities-burgundy',
          depth: 1 // Middle
        },
        {
          id: 'psychologist',
          title: 'Psychologist',
          icon: '🧠',
          description: 'Help individuals understand and improve their mental health through evidence-based therapeutic interventions and counseling.',
          skills: ['Clinical Assessment', 'Therapy Techniques', 'Empathetic Listening', 'Diagnosis'],
          postgrad: true,
          frameColor: 'border-humanities-purple',
          depth: 2 // Forward
        },
        {
          id: 'teaching',
          title: 'Teaching',
          icon: '👨‍🏫',
          description: 'Educate and inspire future generations in literature, psychology, and the humanities at secondary or tertiary level.',
          skills: ['Curriculum Design', 'Classroom Management', 'Mentorship', 'Assessment'],
          postgrad: true,
          frameColor: 'border-humanities-gold',
          depth: 1 // Middle
        }
      ]
    },
    {
      id: 'comm-psych',
      name: 'Communication Science & Psychology',
      shortName: 'Communication + Psychology',
      icon1: Radio,
      icon2: Brain,
      color: 'from-humanities-coral to-humanities-purple',
      careers: [
        {
          id: 'journalism',
          title: 'Journalism',
          icon: '📰',
          description: 'Report stories with empathy and psychological depth, uncovering truths that inform and engage the public.',
          skills: ['Investigative Reporting', 'Interviewing', 'Ethical Journalism', 'Storytelling'],
          postgrad: false,
          frameColor: 'border-humanities-coral',
          depth: 2 // Forward
        },
        {
          id: 'relationship-mgmt',
          title: 'Relationship Management',
          icon: '🤝',
          description: 'Build and maintain strategic partnerships using psychological insights and communication expertise.',
          skills: ['Interpersonal Skills', 'Negotiation', 'Conflict Resolution', 'Networking'],
          postgrad: false,
          frameColor: 'border-humanities-gold',
          depth: 1 // Middle
        },
        {
          id: 'counselling',
          title: 'Counselling',
          icon: '💭',
          description: 'Guide individuals through life challenges using therapeutic communication and psychological understanding.',
          skills: ['Active Listening', 'Therapeutic Communication', 'Crisis Intervention', 'Empathy'],
          postgrad: true,
          frameColor: 'border-humanities-purple',
          depth: 1 // Middle
        }
      ]
    }
  ];

  const selectedPathData = disciplinePaths.find(p => p.id === selectedPath);

  return (
    <div className="py-16 bg-gradient-to-br from-red-700 via-red-800 to-red-900 relative z-10 overflow-hidden">
      {/* Gallery Ambient Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>

      {/* Animated Gallery Lights - Subtle sweeping effect */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Gallery Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-humanities-gold to-amber-600 rounded-2xl px-10 py-8 shadow-2xl mb-6 border-4 border-humanities-cream">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-playfair">
              <Feather className="inline-block mr-3 text-humanities-cream" size={50} />
              The Career Gallery
            </h2>
            <p className="text-xl text-humanities-cream font-crimson italic">
              Explore your future through the lens of art
            </p>
          </div>
        </div>

        {/* Discipline Selector */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-humanities-cream mb-3 font-playfair">
              Choose Your Exhibition
            </h3>
            <p className="text-lg text-humanities-gold font-crimson italic">
              Select a discipline combination to view curated career artworks
            </p>
          </div>

          {/* Three Path Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {disciplinePaths.map((path) => {
              const Icon1 = path.icon1;
              const Icon2 = path.icon2;
              const isSelected = selectedPath === path.id;

              return (
                <div
                  key={path.id}
                  onClick={() => setSelectedPath(path.id)}
                  className={`relative cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    isSelected ? 'scale-105' : ''
                  }`}
                >
                  {/* Card Frame */}
                  <div className={`relative bg-gradient-to-br ${path.color} rounded-2xl p-8 shadow-2xl border-4 ${
                    isSelected ? 'border-humanities-gold shadow-humanities-gold/50' : 'border-humanities-cream/30'
                  }`}>
                    {/* Selected Badge */}
                    {isSelected && (
                      <div className="absolute -top-4 -right-4 bg-humanities-gold text-white rounded-full p-3 shadow-xl border-4 border-white">
                        <Sparkles size={24} />
                      </div>
                    )}

                    {/* Icons */}
                    <div className="flex justify-center items-center gap-4 mb-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Icon1 className="text-white" size={40} />
                      </div>
                      <span className="text-4xl text-white font-bold">+</span>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Icon2 className="text-white" size={40} />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-2xl font-bold text-white text-center mb-3 font-playfair">
                      {path.shortName}
                    </h4>

                    {/* Career Count */}
                    <p className="text-center text-white/90 font-crimson italic">
                      {path.careers.length} Career Artworks
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gallery Wall Display */}
        {selectedPath && selectedPathData && (
          <div className="animate-fadeIn">
            {/* Gallery Title */}
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-humanities-cream to-amber-100 rounded-xl px-8 py-6 shadow-2xl border-4 border-humanities-gold">
                <h3 className="text-4xl font-bold text-humanities-burgundy mb-2 font-playfair">
                  {selectedPathData.name} Exhibition
                </h3>
                <p className="text-lg text-gray-700 font-crimson italic">
                  Curated career opportunities for your path
                </p>
              </div>
            </div>

            {/* Gallery Wall - Framed Careers */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative"
              onMouseMove={handleMouseMove}
            >
              {/* Sweeping Gallery Lights */}
              <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)`
                }}
              ></div>

              {selectedPathData.careers.map((career) => {
                const isHovered = hoveredCareer === career.id;

                // Calculate depth-based styles
                const depthScale = career.depth === 2 ? 1.05 : career.depth === 1 ? 1.0 : 0.95;
                const depthShadow = career.depth === 2
                  ? 'shadow-2xl'
                  : career.depth === 1
                  ? 'shadow-xl'
                  : 'shadow-lg';
                const depthTranslate = career.depth === 2 ? '-translate-y-2' : career.depth === 1 ? 'translate-y-0' : 'translate-y-1';

                // Parallax tilt based on mouse position
                const tiltX = isHovered ? (mousePosition.y - 0.5) * 5 : 0;
                const tiltY = isHovered ? (mousePosition.x - 0.5) * -5 : 0;

                return (
                  <div
                    key={career.id}
                    onMouseEnter={() => setHoveredCareer(career.id)}
                    onMouseLeave={() => setHoveredCareer(null)}
                    className={`relative transition-all duration-500 transform ${depthTranslate} ${
                      isHovered ? 'md:scale-110 scale-105 z-30' : `scale-${depthScale === 1.05 ? '105' : '100'} z-${career.depth * 10}`
                    }`}
                    style={{
                      transform: isHovered
                        ? `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${window.innerWidth >= 768 ? 1.1 : 1.05}) translateZ(${career.depth * 20}px)`
                        : `translateZ(${career.depth * 10}px) scale(${depthScale})`
                    }}
                  >
                    {/* Dynamic Spotlight Effect */}
                    {isHovered && (
                      <>
                        {/* Main spotlight */}
                        <div className="absolute inset-0 bg-gradient-radial from-humanities-gold/40 via-amber-300/20 to-transparent rounded-3xl blur-3xl -z-10 scale-150 animate-pulse"></div>
                        {/* Focused beam */}
                        <div
                          className="absolute inset-0 rounded-3xl -z-10"
                          style={{
                            background: `radial-gradient(ellipse at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 215, 0, 0.3) 0%, transparent 60%)`,
                            filter: 'blur(20px)'
                          }}
                        ></div>
                      </>
                    )}

                    {/* Ornate Frame */}
                    <div className={`relative bg-gradient-to-br from-humanities-cream to-amber-50 rounded-2xl p-4 md:p-8 ${depthShadow} border-4 md:border-8 ${career.frameColor} ${
                      isHovered ? 'shadow-humanities-gold/70 border-humanities-gold' : ''
                    } min-h-[400px] md:min-h-[500px] flex flex-col transition-all duration-500`}
                      style={{
                        boxShadow: isHovered
                          ? `0 ${20 + career.depth * 10}px ${40 + career.depth * 10}px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.3)`
                          : `0 ${10 + career.depth * 5}px ${20 + career.depth * 5}px rgba(0, 0, 0, 0.3)`
                      }}
                    >
                      {/* Frame Corners - Decorative */}
                      <div className="absolute top-2 left-2 w-6 h-6 border-t-4 border-l-4 border-humanities-gold rounded-tl-lg"></div>
                      <div className="absolute top-2 right-2 w-6 h-6 border-t-4 border-r-4 border-humanities-gold rounded-tr-lg"></div>
                      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-4 border-l-4 border-humanities-gold rounded-bl-lg"></div>
                      <div className="absolute bottom-2 right-2 w-6 h-6 border-b-4 border-r-4 border-humanities-gold rounded-br-lg"></div>

                      {/* Postgrad Badge */}
                      {career.postgrad && (
                        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-humanities-gold to-amber-600 text-white rounded-full px-4 py-2 shadow-xl border-4 border-white text-sm font-bold font-quicksand">
                          Postgraduate Study Required
                        </div>
                      )}

                      {/* Career Icon */}
                      <div className="text-center mb-4 md:mb-6">
                        <div className={`inline-block text-6xl md:text-8xl transition-transform duration-500 ${
                          isHovered ? 'md:scale-125 scale-110' : 'scale-100'
                        }`}>
                          {career.icon}
                        </div>
                      </div>

                      {/* Museum Label */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg border-2 border-humanities-gold/30 flex-grow flex flex-col justify-center">
                        <h4 className="text-2xl md:text-3xl font-bold text-humanities-burgundy mb-3 md:mb-4 text-center font-playfair">
                          {career.title}
                        </h4>

                        <p className="text-sm md:text-base text-gray-700 leading-relaxed font-crimson text-center">
                          {career.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HumanitiesCareerGallery;

