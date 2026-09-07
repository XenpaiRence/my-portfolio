export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  image: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "student-management",
    title: "College Student Management System",
    description:
      "A comprehensive student management platform featuring student records, instructor management, grading, attendance, authentication, and REST API integration.",
    longDescription:
      "A full-stack student management system built with PHP and CakePHP backend, featuring REST API integration with a Flutter mobile application. The system manages student records, instructor information, grading, and attendance tracking with a robust authentication system.",
    problem:
      "Educational institutions needed a centralized system to manage student records, instructor information, grades, and attendance in a unified platform accessible through both web and mobile interfaces.",
    solution:
      "Developed a comprehensive management system with a CakePHP REST API backend and Flutter mobile app, providing real-time access to student data, grading, and attendance information.",
    technologies: ["PHP", "CakePHP", "MySQL", "REST API", "Flutter"],
    image: "/projects/student-management.jpg",
    features: [
      "Student record management with profile pictures and documents",
      "Instructor management and course assignments",
      "Grading system with GPA calculations",
      "Attendance tracking and reports",
      "Role-based access control",
      "REST API for mobile app integration",
      "Flutter mobile application",
    ],
    challenges: [
      "Synchronizing data between web and mobile platforms",
      "Implementing real-time attendance updates",
      "Designing scalable REST API endpoints",
      "Managing complex user roles and permissions",
    ],
    learnings: [
      "REST API design best practices",
      "Flutter development and state management",
      "Database optimization for large datasets",
      "Real-time data synchronization techniques",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "attendance-system",
    title: "Student Attendance Management System",
    description:
      "A web-based attendance management system with instructor and student dashboards, authentication, student management, and attendance tracking.",
    longDescription:
      "A user-friendly attendance management system built with PHP and MySQL, providing separate interfaces for instructors to manage attendance and students to view their attendance records.",
    problem:
      "Manual attendance tracking was time-consuming and prone to errors. Educational institutions needed an automated system for managing and recording student attendance.",
    solution:
      "Built a web-based attendance system with separate dashboards for instructors and students, providing real-time attendance tracking and reporting.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    image: "/projects/attendance-system.jpg",
    features: [
      "Instructor dashboard for marking attendance",
      "Student dashboard for viewing attendance records",
      "Attendance reports and statistics",
      "User authentication and authorization",
      "Student management interface",
      "Responsive design with Bootstrap",
      "Attendance history and analytics",
    ],
    challenges: [
      "Handling concurrent attendance entries",
      "Creating efficient reporting queries",
      "Ensuring data accuracy and integrity",
      "Responsive design implementation",
    ],
    learnings: [
      "Bootstrap framework and responsive design",
      "Database query optimization",
      "User authentication and session management",
      "Report generation and data visualization",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "inventory-pos",
    title: "Inventory and POS System",
    description:
      "An inventory management system with product management, stock tracking, and point-of-sale functionality for retail businesses.",
    longDescription:
      "A comprehensive point-of-sale and inventory management solution built with PHP, MySQL, and JavaScript. The system handles product inventory, stock management, sales transactions, and reporting.",
    problem:
      "Retail businesses struggled with manual inventory tracking and sales management, leading to stock discrepancies and inefficient operations.",
    solution:
      "Developed an integrated POS system with real-time inventory tracking, automated stock updates, and comprehensive sales reporting.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/projects/inventory-pos.jpg",
    features: [
      "Product management and categorization",
      "Real-time inventory tracking",
      "Point-of-sale interface",
      "Sales transaction recording",
      "Stock level alerts",
      "Sales and inventory reports",
      "User management with different roles",
    ],
    challenges: [
      "Real-time inventory updates during transactions",
      "Managing concurrent sales operations",
      "Creating comprehensive reporting system",
      "Ensuring accurate stock calculations",
    ],
    learnings: [
      "Transaction management and database consistency",
      "Real-time data updates and notifications",
      "Report generation and analytics",
      "JavaScript form validation and user experience",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "iot-aquaculture",
    title: "IoT Aquaculture Water Quality Monitoring System",
    description:
      "A monitoring system designed to track aquaculture water quality data and provide useful information through a digital monitoring interface.",
    longDescription:
      "An IoT-based water quality monitoring system for aquaculture farms that continuously monitors water parameters through connected sensors and displays real-time data on a web dashboard.",
    problem:
      "Aquaculture farmers needed real-time monitoring of water quality parameters to maintain optimal conditions for fish and shrimp farming, but manual testing was time-consuming and inaccurate.",
    solution:
      "Designed and implemented an IoT system with multiple sensors measuring water parameters, transmitting data to a cloud platform, and displaying real-time analytics on a web dashboard.",
    technologies: ["IoT", "Sensors", "Web Dashboard", "Data Analytics"],
    image: "/projects/iot-aquaculture.jpg",
    features: [
      "Real-time water quality parameter monitoring",
      "Temperature, pH, and dissolved oxygen sensors",
      "Cloud-based data collection and storage",
      "Web dashboard with live graphs",
      "Historical data analysis and trends",
      "Alert system for parameter anomalies",
      "Mobile-responsive interface",
    ],
    challenges: [
      "Sensor calibration and accuracy",
      "Reliable data transmission in remote locations",
      "Data storage and retrieval optimization",
      "Creating intuitive data visualization",
    ],
    learnings: [
      "IoT systems design and sensor integration",
      "Real-time data processing and visualization",
      "Cloud platform integration",
      "Hardware-software communication",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
];
