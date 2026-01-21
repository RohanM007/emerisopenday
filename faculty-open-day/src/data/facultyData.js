export const faculties = [
  {
    id: 'education',
    name: 'School of Education',
    path: '/education',
    color: 'education',
    description: 'Empowering future educators and leaders in learning',
    degree: {
      title: 'Bachelor of Education',
      description: 'A comprehensive program designed to prepare aspiring teachers with the knowledge, skills, and practical experience needed to excel in modern educational environments.',
      downloadUrl: '/src/assets/Education/iie-bachelor-of-education-in-intermediate-phase-teaching-full-time-factsheet-2026.pdf',
      modules: [
        // Professional Subjects - Semester 1
        { code: 'INPCF110', name: 'Introduction to Personal Computing', credits: 5, semester: 1, nqf: 5, category: 'Professional Subjects' },
        { code: 'FAFR6121/FALX6121/FALZ6121/FALN6111', name: 'First Additional Languages: Afrikaans/IsiXhosa/IsiZulu/Northern Sotho', credits: 12, semester: 1, nqf: 6, category: 'Professional Subjects' },
        { code: 'ITSA5111', name: 'Introduction to Scholarship A', credits: 8, semester: 1, nqf: 5, category: 'Professional Subjects' },
        // Professional Themes - Semester 1
        { code: 'PSED5111', name: 'Psychology for Educators 1A', credits: 12, semester: 1, nqf: 5, category: 'Professional Themes' },
        { code: 'IPTL6111', name: 'IP Teaching and Learning', credits: 7, semester: 1, nqf: 6, category: 'Professional Themes' },
        // Professional Didactics I - Semester 1
        { code: 'TISS5111', name: 'TIP* Social Sciences 1', credits: 8, semester: 1, nqf: 5, category: 'Professional Didactics I' },
        { code: 'TIMA5111', name: 'TIP* Mathematics 1A', credits: 8, semester: 1, nqf: 5, category: 'Professional Didactics I' },

        // Professional Subjects - Semester 2
        { code: 'ENED6122', name: 'English for Education 1', credits: 12, semester: 2, nqf: 6, category: 'Professional Subjects' },
        { code: 'COLA5112/COLX5112/COLZ5112/COLN5112', name: 'Communicative Languages: Afrikaans/IsiXhosa/IsiZulu/Northern Sotho', credits: 12, semester: 2, nqf: 5, category: 'Professional Subjects' },
        { code: 'IEMS5111', name: 'Introduction to EMS', credits: 5, semester: 2, nqf: 5, category: 'Professional Subjects' },
        // Professional Themes - Semester 2
        { code: 'PSED5112', name: 'Psychology for Educators 1B', credits: 12, semester: 2, nqf: 5, category: 'Professional Themes' },
        // Professional Didactics I - Semester 2
        { code: 'TIPM6112', name: 'TIP* Mathematics 1B', credits: 8, semester: 2, nqf: 6, category: 'Professional Didactics I' },
        { code: 'TNST5112', name: 'TIP* Nat Sciences and Technology 1', credits: 8, semester: 2, nqf: 5, category: 'Professional Didactics I' },

        // Year Long
        { code: 'TEIP5119', name: 'Teaching Experience 1', credits: 6, semester: 0, nqf: 5, category: 'Year Long' },
      ]
    },
    higherCertificate: {
      title: 'Higher Certificate in Education',
      description: 'An entry-level qualification for those beginning their journey in education, providing foundational knowledge and skills.',
      downloadUrl: '/src/assets/Humanities/iie-higher-certificate-in-communication-practices-full-time-fact-sheet-2026.pdf',
      modules: [
        // Semester 1
        { code: 'APCT5131', name: 'Applied Communication Techniques', credits: 15, semester: 1, nqf: 5, category: 'Core Modules' },
        { code: 'COSC5121', name: 'Communication Science 1A: Interpersonal Communication', credits: 15, semester: 1, nqf: 5, category: 'Core Modules' },
        { code: 'DIAL5111', name: 'Digital and Academic Literacies', credits: 15, semester: 1, nqf: 5, category: 'Core Modules' },
        { code: 'ENLP5111', name: 'English Language Practice A', credits: 15, semester: 1, nqf: 5, category: 'Core Modules' },

        // Semester 2
        { code: 'DTPS5111', name: 'Design Thinking and Problem-Solving', credits: 15, semester: 2, nqf: 5, category: 'Core Modules' },
        { code: 'MAFU5112', name: 'Mathematics Fundamentals', credits: 15, semester: 2, nqf: 5, category: 'Core Modules' },
        { code: 'XCOP5112', name: 'Work Integrated Learning', credits: 15, semester: 2, nqf: 5, category: 'Core Modules' },

        // Electives - First Additional Languages (Students choose one)
        { code: 'FALN5112', name: 'First Additional Language Northern Sotho', credits: 15, semester: 0, nqf: 5, category: 'Electives - First Additional Languages' },
        { code: 'FALX5112', name: 'First Additional Language isiXhosa', credits: 15, semester: 0, nqf: 5, category: 'Electives - First Additional Languages' },
        { code: 'FALZ5112', name: 'First Additional Language isiZulu', credits: 15, semester: 0, nqf: 5, category: 'Electives - First Additional Languages' },
        { code: 'FAFR5112', name: 'First Additional Language Afrikaans', credits: 15, semester: 0, nqf: 5, category: 'Electives - First Additional Languages' },
      ]
    },
    feesUrl: '/src/assets/fees.pdf'
  },
  {
    id: 'law',
    name: 'School of Law',
    path: '/law',
    color: 'law',
    description: 'Shaping legal minds and champions of justice',
    degree: {
      title: 'Bachelor of Laws (LLB)',
      description: 'A rigorous program that provides comprehensive legal education, critical thinking skills, and practical training for aspiring legal professionals.',
      downloadUrl: '/src/assets/Law/iie-bachelor-of-commerce-in-law-full-time-factsheet-2026-v1.pdf',
      modules: [
        // Semester 1
        { code: 'BMNG5121', name: 'Business Management 1A', credits: 15, semester: 1, nqf: 5 },
        { code: 'INFL5111', name: 'Introduction and Foundations to Law', credits: 15, semester: 1, nqf: 5 },
        { code: 'ENFL6111', name: 'English for Law', credits: 15, semester: 1, nqf: 6 },
        { code: '*ACBP5121', name: 'Accounting 1A', credits: 15, semester: 1, nqf: 5 },
        // Semester 2
        { code: 'BMNG5122', name: 'Business Management 1B', credits: 15, semester: 2, nqf: 5 },
        { code: 'CONL5112', name: 'Constitutional Law and Human Rights', credits: 15, semester: 2, nqf: 5 },
        { code: 'PMIC5111', name: 'Economics 1A (Micro)', credits: 15, semester: 2, nqf: 5 },
        { code: '*ACBP5122', name: 'Accounting 1B', credits: 15, semester: 2, nqf: 5 },
      ]
    },
    higherCertificate: {
      title: 'Higher Certificate in Law',
      description: 'An introductory qualification providing foundational legal knowledge and skills for those entering the legal field.',
      downloadUrl: '/src/assets/Law/iie-higher-certificate-in-legal-studies-full-time-factsheet-2026.pdf',
      modules: [
        // Semester 1
        { code: 'LELS5111', name: 'Legal and Literacy Skills', credits: 15, semester: 1, nqf: 5 },
        { code: 'FSAL5121', name: 'Fundamentals of the South African Legal System', credits: 15, semester: 1, nqf: 5 },
        { code: 'ASPL5111', name: 'Aspects of Private Law', credits: 15, semester: 1, nqf: 5 },
        { code: 'LEOS5122', name: 'Legal Office Support', credits: 15, semester: 1, nqf: 5 },
        // Semester 2
        { code: 'ASML5122', name: 'Aspects of Mercantile Law', credits: 15, semester: 2, nqf: 5 },
        { code: 'DCCP5112', name: 'Debt Collection and Civil Procedure', credits: 15, semester: 2, nqf: 5 },
        { code: 'PEMA5122', name: 'Principles of Employment Law', credits: 15, semester: 2, nqf: 5 },
        // Year Long
        { code: 'XBLAW5129', name: 'Work Integrated Learning 1', credits: 15, semester: 0, nqf: 5 },
      ]
    },
    feesUrl: '/src/assets/fees.pdf'
  },
  {
    id: 'commerce',
    name: 'School of Commerce',
    path: '/commerce',
    color: 'commerce',
    description: 'Building business leaders and economic innovators',
    degree: {
      title: 'Bachelor of Commerce',
      description: 'A dynamic program covering business, finance, economics, and management, preparing students for successful careers in the corporate world.',
      downloadUrl: '/src/assets/Commerce/iie-bachelor-of-commerce-full-time-fact-sheet-2026.pdf',
      modules: [
        { code: 'ACBP5121', name: 'Accounting 1A', credits: 15, semester: 1, nqf: 5 },
        { code: 'APCT5131', name: 'Applied Communication Techniques', credits: 15, semester: 1, nqf: 5 },
        { code: 'BMNG5121', name: 'Business Management 1A', credits: 15, semester: 1, nqf: 5 },
        { code: 'PMIC5111', name: 'Economics 1A', credits: 15, semester: 1, nqf: 5 },
        { code: 'ACBP5122', name: 'Accounting 1B', credits: 15, semester: 2, nqf: 5 },
        { code: 'BMNG5122', name: 'Business Management 1B', credits: 15, semester: 2, nqf: 5 },
        { code: 'PMAC5112', name: 'Economics 1B', credits: 15, semester: 2, nqf: 5 },
        { code: 'MAKT5112', name: 'Introduction to Marketing Theory and Practice', credits: 15, semester: 2, nqf: 5 },
      ]
    },
    higherCertificate: {
      title: 'Higher Certificate in Commerce',
      description: 'A foundational business qualification providing essential skills in commerce, accounting, and business management.',
      downloadUrl: '/src/assets/Commerce/iie-higher-certificate-in-business-principles-and-practice.pdf',
      modules: [
        { code: 'IQTT5111', name: 'Introduction to Quantitative Techniques and Techniques', credits: 15, semester: 1, nqf: 5 },
        { code: 'INAC5111', name: 'Introduction to Accounting 1A', credits: 15, semester: 1, nqf: 5 },
        { code: 'BMAD5121', name: 'Business Management & Administration A', credits: 15, semester: 1, nqf: 5 },
        { code: 'DIAL5111', name: 'Digital and Academic Literacies', credits: 15, semester: 1, nqf: 5 },
        { code: 'PRMA5122', name: 'Project Management and Administration', credits: 15, semester: 2, nqf: 5 },
        { code: 'ACSO5112', name: 'Accounting Software', credits: 15, semester: 2, nqf: 5 },
        { code: 'BMAD5112', name: 'Business Management & Administration B', credits: 15, semester: 2, nqf: 5 },
        { code: 'XBPP5129', name: 'Work Integrated Learning', credits: 15, semester: 2, nqf: 5 },
      ]
    },
    feesUrl: '/src/assets/fees.pdf'
  },
  {
    id: 'humanities',
    name: 'School of Humanities',
    path: '/humanities',
    color: 'humanities',
    description: 'Exploring human culture, society, and expression',
    degree: {
      title: 'Bachelor of Arts in Humanities',
      description: 'A diverse program exploring literature, history, philosophy, and social sciences, developing critical thinking and cultural awareness.',
      downloadUrl: '/src/assets/Humanities/iie-bachelor-of-arts-full-time-fact-sheet-2026.pdf',
      modules: [
        // Semester 1
        { code: 'ENGL5121', name: 'English 1A: Introduction to English Studies', credits: 15, semester: 1, nqf: 5 },
        { code: 'COSC5121', name: 'Communication Science 1A: Interpersonal Communication', credits: 15, semester: 1, nqf: 5 },
        { code: 'PSYC5121', name: 'Psychology 1A: Introduction to Psychology', credits: 15, semester: 1, nqf: 5 },
        { code: 'SOCI5121', name: 'Sociology 1A', credits: 15, semester: 1, nqf: 5 },
        // Semester 2
        { code: 'ENGL6122', name: 'English 1B: Introduction to English Studies', credits: 15, semester: 2, nqf: 6 },
        { code: 'COSC5132', name: 'Communication Science 1B: Intercultural Communication', credits: 15, semester: 2, nqf: 5 },
        { code: 'PSYC5122', name: 'Psychology 1B: Introduction to Psychology', credits: 12, semester: 2, nqf: 5 },
        { code: 'SOCI5122', name: 'Sociology 1B', credits: 15, semester: 2, nqf: 5 },
      ]
    },
    higherCertificate: {
      title: 'Higher Certificate in Humanities',
      description: 'An introductory program providing foundational knowledge in humanities subjects and developing analytical skills.',
      downloadUrl: '/src/assets/Humanities/iie-higher-certificate-in-communication-practices-full-time-fact-sheet-2026.pdf',
      modules: [
        // Semester 1
        { code: 'APCT5131', name: 'Applied Communication Techniques', credits: 15, semester: 1, nqf: 5 },
        { code: 'COSC5121', name: 'Communication Science 1A: Interpersonal Communication', credits: 15, semester: 1, nqf: 5 },
        { code: 'DIAL5111', name: 'Digital and Academic Literacies', credits: 15, semester: 1, nqf: 5 },
        { code: 'ENLP5111', name: 'English Language Practice A', credits: 15, semester: 1, nqf: 5 },
        // Semester 2
        { code: 'DTPS5111', name: 'Design Thinking and Problem-Solving', credits: 15, semester: 2, nqf: 5 },
        { code: 'ENLP5112', name: 'English Language Practice B', credits: 15, semester: 2, nqf: 5 },
        { code: 'FOMS5112', name: 'Fundamentals of Media Studies', credits: 15, semester: 2, nqf: 5 },
        { code: 'XCOP5112', name: 'Work Integrated Learning', credits: 15, semester: 2, nqf: 5 },
      ]
    },
    feesUrl: '/src/assets/fees.pdf'
  }
];

export const getFacultyById = (id) => {
  return faculties.find(faculty => faculty.id === id);
};

