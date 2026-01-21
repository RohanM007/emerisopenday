import { BookOpen } from 'lucide-react';
import DownloadButton from './DownloadButton';

const ProgramSection = ({ title, description, downloadUrl, color, icon: Icon = BookOpen }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Icon className={`text-${color} mr-3`} size={32} />
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <DownloadButton label="Download Information" url={downloadUrl} color={color} />
    </div>
  );
};

export default ProgramSection;

