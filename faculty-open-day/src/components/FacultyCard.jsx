import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Award } from 'lucide-react';

const FacultyCard = ({ faculty }) => {
  const colorClasses = {
    education: {
      gradient: 'from-blue-500 to-cyan-600',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      hover: 'hover:shadow-blue-500/30'
    },
    law: {
      gradient: 'from-purple-500 to-pink-600',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      hover: 'hover:shadow-purple-500/30'
    },
    commerce: {
      gradient: 'from-green-500 to-emerald-600',
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200',
      hover: 'hover:shadow-green-500/30'
    },
    humanities: {
      gradient: 'from-orange-500 to-red-600',
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200',
      hover: 'hover:shadow-orange-500/30'
    },
  };

  const colors = colorClasses[faculty.color];

  return (
    <Link to={faculty.path} className="group block h-full">
      <div className={`relative bg-white rounded-2xl shadow-xl ${colors.hover} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full overflow-hidden border-2 ${colors.border}`}>
        {/* Gradient Header */}
        <div className={`bg-gradient-to-br ${colors.gradient} p-8 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
              {faculty.name}
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              {faculty.description}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Programs Info */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className={`${colors.bg} p-2 rounded-lg`}>
                <BookOpen className={colors.text} size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Degree Program</h3>
                <p className="text-sm text-gray-600">Comprehensive bachelor's degree</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className={`${colors.bg} p-2 rounded-lg`}>
                <Award className={colors.text} size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Higher Certificate</h3>
                <p className="text-sm text-gray-600">Foundation qualification</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`flex items-center justify-between p-4 ${colors.bg} rounded-xl group-hover:bg-gradient-to-r group-hover:${colors.gradient} transition-all duration-300`}>
            <span className={`font-bold ${colors.text} group-hover:text-white transition-colors`}>
              Explore Programs
            </span>
            <ArrowRight
              className={`${colors.text} group-hover:text-white group-hover:translate-x-2 transition-all`}
              size={20}
            />
          </div>
        </div>

        {/* Decorative Corner */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-bl-full`}></div>
      </div>
    </Link>
  );
};

export default FacultyCard;

