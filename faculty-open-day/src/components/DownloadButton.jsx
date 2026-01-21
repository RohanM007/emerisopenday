import { Download } from 'lucide-react';

const DownloadButton = ({ label, url, color = 'blue' }) => {
  const colorClasses = {
    education: 'bg-education hover:bg-education-dark',
    law: 'bg-law hover:bg-law-dark',
    commerce: 'bg-commerce hover:bg-commerce-dark',
    humanities: 'bg-humanities hover:bg-humanities-dark',
  };

  return (
    <a
      href={url}
      download
      className={`inline-flex items-center px-6 py-3 ${colorClasses[color]} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
    >
      <Download className="mr-2" size={20} />
      {label}
    </a>
  );
};

export default DownloadButton;

