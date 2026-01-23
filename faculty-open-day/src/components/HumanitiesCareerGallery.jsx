import { useState } from 'react';
import { BookOpen, Brain, Radio, Feather, Sparkles } from 'lucide-react';

const HumanitiesCareerGallery = () => {
  const [selectedPath, setSelectedPath] = useState(null);
  const [hoveredCareer, setHoveredCareer] = useState(null);

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
          frameColor: 'border-humanities-burgundy'
        },
        { 
          id: 'media-consulting',
          title: 'Media Consulting', 
          icon: '📺', 
          description: 'Advise organizations on strategic communication, brand messaging, and media relations to build powerful public narratives.',
          skills: ['Strategic Communication', 'Media Relations', 'Brand Strategy', 'Public Speaking'],
          postgrad: false,
          frameColor: 'border-humanities-gold'
        },
        { 
          id: 'research-1',
          title: 'Research', 
          icon: '🔍', 
          description: 'Investigate language, media, and cultural trends to contribute to academic knowledge and inform policy decisions.',
          skills: ['Critical Analysis', 'Academic Writing', 'Data Collection', 'Literature Review'],
          postgrad: false,
          frameColor: 'border-humanities-coral'
        },
        { 
          id: 'comm-management',
          title: 'Communication Management', 
          icon: '💼', 
          description: 'Lead corporate and organizational communication strategies, managing internal and external messaging at the highest level.',
          skills: ['Leadership', 'Strategic Planning', 'Crisis Communication', 'Team Management'],
          postgrad: false,
          frameColor: 'border-humanities-forest'
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
          frameColor: 'border-humanities-burgundy'
        },
        { 
          id: 'psychologist',
          title: 'Psychologist', 
          icon: '🧠', 
          description: 'Help individuals understand and improve their mental health through evidence-based therapeutic interventions and counseling.',
          skills: ['Clinical Assessment', 'Therapy Techniques', 'Empathetic Listening', 'Diagnosis'],
          postgrad: true,
          frameColor: 'border-humanities-purple'
        },
        { 
          id: 'teaching',
          title: 'Teaching', 
          icon: '👨‍🏫', 
          description: 'Educate and inspire future generations in literature, psychology, and the humanities at secondary or tertiary level.',
          skills: ['Curriculum Design', 'Classroom Management', 'Mentorship', 'Assessment'],
          postgrad: true,
          frameColor: 'border-humanities-gold'
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
          frameColor: 'border-humanities-coral'
        },
        { 
          id: 'relationship-mgmt',
          title: 'Relationship Management', 
          icon: '🤝', 
          description: 'Build and maintain strategic partnerships using psychological insights and communication expertise.',
          skills: ['Interpersonal Skills', 'Negotiation', 'Conflict Resolution', 'Networking'],
          postgrad: false,
          frameColor: 'border-humanities-gold'
        },
        { 
          id: 'counselling',
          title: 'Counselling', 
          icon: '💭', 
          description: 'Guide individuals through life challenges using therapeutic communication and psychological understanding.',
          skills: ['Active Listening', 'Therapeutic Communication', 'Crisis Intervention', 'Empathy'],
          postgrad: true,
          frameColor: 'border-humanities-purple'
        }
      ]
    }
  ];

  const selectedPathData = disciplinePaths.find(p => p.id === selectedPath);

  return (
    <div className="py-16 bg-gradient-to-br from-red-700 via-red-800 to-red-900 relative z-10 overflow-hidden">
      {/* Gallery Ambient Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
      
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {selectedPathData.careers.map((career) => {
                const isHovered = hoveredCareer === career.id;

                return (
                  <div
                    key={career.id}
                    onMouseEnter={() => setHoveredCareer(career.id)}
                    onMouseLeave={() => setHoveredCareer(null)}
                    className={`relative transition-all duration-500 transform ${
                      isHovered ? 'scale-105 z-20' : 'scale-100'
                    }`}
                  >
                    {/* Spotlight Effect */}
                    {isHovered && (
                      <div className="absolute inset-0 bg-gradient-radial from-humanities-gold/30 via-transparent to-transparent rounded-3xl blur-2xl -z-10 scale-150"></div>
                    )}

                    {/* Ornate Frame */}
                    <div className={`relative bg-gradient-to-br from-humanities-cream to-amber-50 rounded-2xl p-8 shadow-2xl border-8 ${career.frameColor} ${
                      isHovered ? 'shadow-humanities-gold/50' : ''
                    } min-h-[500px] flex flex-col`}>
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
                      <div className="text-center mb-6">
                        <div className={`inline-block text-8xl transition-transform duration-500 ${
                          isHovered ? 'scale-125' : 'scale-100'
                        }`}>
                          {career.icon}
                        </div>
                      </div>

                      {/* Museum Label */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border-2 border-humanities-gold/30 flex-grow flex flex-col justify-center">
                        <h4 className="text-3xl font-bold text-humanities-burgundy mb-4 text-center font-playfair">
                          {career.title}
                        </h4>

                        <p className="text-gray-700 leading-relaxed font-crimson text-center">
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

