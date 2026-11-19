import type {
  CertificationItem,
  EducationItem,
  NavItem,
  PersonalInfo,
  Project,
  SkillCategory,
  SocialLink,
} from '../types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const personalInfo: PersonalInfo = {
  name: 'Mrugansi Kathiriya',
  role: 'Full-Stack Developer',
  subtitle: 'MSc IT Student | Full-Stack Developer',
  location: 'Surat, Gujarat, India',
  email: 'mrugansikathiriya505@gmail.com',
  linkedIn: 'https://linkedin.com/in/mrugansi-kathiriya/',
  github: 'https://github.com/mrugansikathiriya',
  resumeUrl: '/resume.pdf',
  avatarUrl: '/certification/profile.jpg',
  summary: [
    'I am an MSc IT student and Full-Stack Developer with a strong academic and practical foundation in data structures, algorithms, object-oriented design, and relational database systems.',
    'I have hands-on experience building complete full-stack web applications using JavaScript, React, PHP, MySQL, RESTful APIs, and modern responsive UI frameworks.',
    'I am passionate about end-to-end web engineering, clean system architecture, solving complex algorithmic challenges, and continuously mastering modern software stacks.',
  ],
  interests: [
    'Full-Stack Web Development',
    'Frontend Architecture & Responsive UI',
    'Backend Services & REST APIs',
    'Data Structures & Algorithms',
    'Database Design & Query Optimization',
  ],
  engineeringPhilosophy:
    'Dedicated to engineering reliable, scalable, and intuitive full-stack web applications. My focus is on turning real-world requirements into clean, maintainable software architectures with seamless user experiences and robust backend workflows.',
  careerObjective:
    'Dedicated to engineering reliable, scalable, and intuitive full-stack web applications with clean code, robust APIs, and modern architecture.',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/mrugansikathiriya',
    ariaLabel: 'Visit GitHub profile of Mrugansi Kathiriya',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/mrugansi-kathiriya/',
    ariaLabel: 'Visit LinkedIn profile of Mrugansi Kathiriya',
  },
  {
    platform: 'Email',
    url: 'mailto:mrugansikathiriya505@gmail.com',
    ariaLabel: 'Send email to Mrugansi Kathiriya',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Foundational and modern languages for problem solving & engineering',
    iconName: 'Code2',
    skills: ['Java', 'C++', 'JavaScript', 'Python', 'C', 'C#', 'PHP'],
  },
  {
    title: 'Core Computer Science',
    description: 'Academic rigor and fundamental computing concepts',
    iconName: 'Cpu',
    skills: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
    ],
  },
  {
    title: 'Web Development',
    description: 'Modern frontend, responsive UI, backend services, and APIs',
    iconName: 'Globe',
    skills: [
      'HTML5',
      'CSS3',
      'React.js',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Databases',
    description: 'Relational data modeling, querying, and NoSQL stores',
    iconName: 'Database',
    skills: ['MySQL', 'MongoDB', 'SQL Server', 'Oracle'],
  },
  {
    title: 'Tools & Platforms',
    description: 'Version control, development environments, and API tooling',
    iconName: 'Wrench',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    title: 'Cloud',
    description: 'Foundational cloud compute, storage, and serverless infrastructure',
    iconName: 'Cloud',
    skills: ['AWS EC2', 'AWS S3', 'AWS Lambda'],
  },
];

export const projects: Project[] = [
  {
    title: 'Job Portal Web Application (CareerCraft)',
    subtitle: 'Multi-Role Enterprise Recruitment Platform',
    badge: 'Team Project / Lead',
    description:
      'A comprehensive job portal web application supporting three user roles: job seekers, companies, and administrators.',
    technologies: ['PHP', 'JavaScript', 'HTML', 'Tailwind CSS', 'MySQL'],
    liveDemo: 'https://carrercraft.freedev.app/',
    contributions: [
      'Led a team of four members during development.',
      'Developed authentication and session management functionality.',
      'Implemented role-based access control and CSRF protection.',
      'Worked on job management and applicant workflows.',
      'Implemented fraud-reporting functionality backed by MySQL.',
      'Worked on database query optimization and feature integration.',
    ],
  },
  {
    title: 'LeetMetric',
    subtitle: 'LeetCode Analytics & Performance Dashboard',
    badge: 'API-Driven Web App',
    description:
      'A responsive dashboard that displays LeetCode statistics and progress metrics using API-based data retrieval.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    contributions: [
      'Implemented asynchronous JavaScript requests.',
      'Retrieved and processed API responses.',
      'Created circular progress indicators.',
      'Added input validation.',
      'Worked on API access and CORS-related integration issues.',
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    degree: 'Master of Science in Information Technology (MSc IT)',
    field: 'Information Technology & Advanced Software Development',
    institution: 'Charotar University of Science and Technology (CHARUSAT)',
    period: 'Expected graduation: 2028',
    status: 'In Progress',
    highlights: [
      'Advanced computing coursework, modern systems, and software engineering methodologies.',
      'Focusing on full-stack web architectures, distributed systems, and scalable algorithmic design.',
    ],
  },
  {
    degree: 'Bachelor of Science in Information Technology (BSc IT)',
    field: 'Computer Science & Information Technology',
    institution: 'J.P. Dawar Institute of Information Science & Technology (VNSGU)',
    period: '2023 – 2026',
    status: 'Completed',
    grade: 'CGPA: 8.18',
    highlights: [
      'Strong academic foundation in Data Structures, OOP, DBMS, OS, and Web Technologies.',
      'Completed academic projects including CareerCraft and LeetMetric with honors distinction.',
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: 'HTML Training Certificate',
    issuer: 'IIT Bombay',
    issueDate: 'February 2024',
    fileUrl: '/certification/html-iit-bombay.pdf',
  },
  {
    title: 'C Training Certificate',
    issuer: 'IIT Bombay',
    issueDate: 'September 2024',
    fileUrl: '/certification/c-language-iit-bombay.pdf',
  },
  {
    title: 'Software Engineering',
    issuer: 'Coursera',
    issueDate: 'October 2026',
    fileUrl: '/certification/se-coursera.pdf',
  },
];
