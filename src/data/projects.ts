export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  role: string;
  tone: 'blue' | 'violet' | 'gold' | 'jade';
};

export const projects: Project[] = [
  {
    title: 'Attendance QR',
    subtitle: 'QR-based attendance and session management platform',
    description:
      'A production-oriented backend project for attendance workflows, covering session scheduling, QR check-in, absence requests, notifications, and an early fraud-detection direction.',
    tech: ['Spring Boot', 'MySQL', 'JPA', 'Flyway', 'OpenAPI'],
    github: 'https://github.com/binkadev/Attendance-Check-By-QRcode',
    role: 'Backend System',
    tone: 'blue',
  },
  {
    title: 'HTTM-AI',
    subtitle: 'AI-oriented web product',
    description:
      'An AI-focused application concept selected as ongoing product work, aimed at transforming ideas into practical digital workflows with clearer product direction.',
    tech: ['AI App', 'Workflow Design', 'Product Thinking'],
    github: 'https://github.com/binkadev/HTTM-AI',
    role: 'AI Product',
    tone: 'violet',
  },
  {
    title: 'Rental Room Management',
    subtitle: 'Boarding house operations system',
    description:
      'A full-stack management system with authentication, tenant and landlord flows, contracts, invoices, and database-driven business logic for day-to-day operations.',
    tech: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT'],
    github: 'https://github.com/binkadev/quanliphongtro',
    role: 'Full-stack App',
    tone: 'gold',
  },
  {
    title: 'Omnifood',
    subtitle: 'Responsive product landing page',
    description:
      'A front-end project centred on responsive layout, visual hierarchy, refined section design, and polished presentation for a modern landing-page experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/binkadev/Omnifood',
    role: 'Frontend UI',
    tone: 'jade',
  },
];
