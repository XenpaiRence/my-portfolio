export interface Project {
  id: string;
  title: string;
  description: string;
  subtitle?: string;
  longDescription: string;
  problem: string;
  solution: string;
  purpose?: string;
  functions?: { title: string; details: string[] }[];
  documentCategories?: string[];
  users?: string[];
  impact?: string[];
  benefits?: string[];
  scope?: string;
  technologies: string[];
  image?: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "e-kitchen-module",
    title: "E-KITCHEN MODULE",
    subtitle: "Interactive Recipe Costing Learning Module for Grade 10 Cookery",
    description:
      "An interactive digital learning module designed to help Grade 10 learners understand and practice recipe costing through lessons, guided activities, and an ingredient-cost calculator.",
    longDescription:
      "E-KITCHEN MODULE is an instructional innovation for Grade 10 Cookery learners at Naggasican National High School. It combines interactive lessons and step-by-step examples with a recipe-costing calculator, guided practice, quizzes, and performance tasks. Learners work through ingredient costs, total recipe cost, and cost per serving, then apply the process to selected recipes.",
    problem:
      "Learners can find it difficult to apply recipe-costing procedures accurately and independently, especially when calculating individual ingredient costs, total recipe cost, and cost per serving.",
    solution:
      "A structured electronic learning environment that teaches recipe-costing concepts, provides guided computation practice, and lets learners check calculations with an interactive calculator.",
    purpose:
      "To support Grade 10 learners in developing competency and confidence in performing recipe costing through interactive instruction and hands-on practice.",
    functions: [
      {
        title: "Interactive Lessons",
        details: [
          "Explains recipe-costing concepts, key terms, formulas, and step-by-step examples.",
          "Lets learners review lessons at their own pace.",
        ],
      },
      {
        title: "Recipe Costing Calculator",
        details: [
          "Accepts ingredient names, quantities, and unit costs.",
          "Calculates ingredient cost as quantity used multiplied by unit cost.",
        ],
      },
      {
        title: "Total Cost and Cost Per Serving",
        details: [
          "Adds ingredient costs to calculate the total recipe cost.",
          "Divides the total recipe cost by the number of servings to calculate cost per serving.",
        ],
      },
      {
        title: "Editable Ingredient Entries",
        details: [
          "Allows learners to add, edit, or remove ingredients and adjust quantities or unit prices.",
          "Updates calculations when ingredient information changes.",
        ],
      },
      {
        title: "Practice and Assessment",
        details: [
          "Includes computation exercises, matching activities, guided tasks, independent practice, and quizzes.",
          "Uses pre-tests, post-tests, and a complete recipe-costing performance task to assess learning.",
        ],
      },
    ],
    users: [
      "Grade 10 learners taking Cookery or related TVL learning areas",
      "Cookery teachers",
    ],
    benefits: [
      "Practice recipe-costing steps in a structured sequence",
      "Check ingredient, total recipe, and per-serving cost calculations",
      "Repeat activities and correct errors while learning",
      "Apply recipe costing to practical recipes and ingredient prices",
    ],
    scope:
      "Focuses on teaching and practicing recipe costing with Grade 10 Cookery learners through lessons, an ingredient calculator, interactive activities, assessments, and a recipe-costing performance task.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Bootstrap 5",
      "JavaScript",
      "Alpine.js",
      "Vite",
      "XAMPP",
    ],
    image: "/projects%20img/ekitchen.png",
    features: [
      "Interactive lessons on recipe-costing terms and formulas",
      "Ingredient cost calculator with editable entries",
      "Automatic total recipe cost and cost-per-serving calculations",
      "Guided exercises, quizzes, and independent practice",
      "Pre-test, post-test, and recipe-costing performance task",
    ],
    challenges: [],
    learnings: [],
  },
  {
    id: "lancaster-hoa",
    title: "Lancaster Residences HOA Management System",
    subtitle: "Web-Based Homeowners Association Information Management System for Lancaster Residences Phase 2",
    description:
      "A web-based HOA information management system for Lancaster Residences Phase 2, bringing homeowner records, announcements, service concerns, billing, payment tracking, and administrative reports into one portal.",
    longDescription:
      "The Lancaster Residences HOA Management System is designed to give homeowners and association administrators one secure place to manage community information and recurring administrative workflows. Homeowners can view announcements, monitor billing and recorded payments, manage vehicle and car-sticker information, and submit concerns or service requests. Authorized administrators can manage homeowner records, track requests and overdue accounts, record actions taken, and generate reports. The proposal includes payment recording and monitoring, not online payment processing.",
    problem:
      "As the community grows, relying on paper records, spreadsheets, and social media communication makes it harder to keep homeowner information organized, share updates, monitor dues, and follow concerns through to resolution.",
    solution:
      "A centralized web portal for homeowner records, community announcements, concern tracking, billing and payment records, vehicle stickers, reminders, and HOA reporting.",
    purpose:
      "To digitize HOA records and improve communication and administrative workflows for Lancaster Residences Phase 2 homeowners and association staff.",
    functions: [
      {
        title: "Homeowner Accounts and Records",
        details: [
          "Supports homeowner registration, profiles, and secure accounts for homeowners and administrators.",
          "Centralizes homeowner information for authorized association use.",
        ],
      },
      {
        title: "Announcements and Reminders",
        details: [
          "Provides a place for administrators to publish community announcements.",
          "Displays reminders for upcoming or overdue dues and important announcements; SMS support is outside the proposal scope.",
        ],
      },
      {
        title: "Concerns and Service Requests",
        details: [
          "Allows homeowners to submit concerns and service requests and monitor their status.",
          "Lets administrators record actions taken and follow issues through resolution.",
        ],
      },
      {
        title: "Billing and Payment Records",
        details: [
          "Creates homeowner billing records and tracks payment history, balances, and overdue accounts.",
          "Calculates late-payment penalties based on HOA rules and records actions taken on unpaid accounts.",
          "Records and monitors payments; online payment processing and third-party payment integrations are not included.",
        ],
      },
      {
        title: "Vehicle and Car Sticker Management",
        details: [
          "Registers homeowner vehicle information and tracks issued car stickers.",
          "Monitors active and expired stickers.",
        ],
      },
      {
        title: "Dashboard and Reports",
        details: [
          "Provides an administrative dashboard for monitoring HOA activities.",
          "Generates summaries and reports for homeowner records, concerns, billing, payments, and penalties.",
        ],
      },
    ],
    users: [
      "Registered homeowners of Lancaster Residences Phase 2",
      "Authorized homeowners association administrators",
    ],
    benefits: [
      "Keep homeowner information in a centralized system",
      "Make community announcements and reminders easier to access",
      "Track homeowner concerns and administrative follow-up",
      "Monitor dues, recorded payments, penalties, and overdue accounts",
      "Organize vehicle registrations and car-sticker status",
      "Support HOA decisions with administrative reports",
    ],
    scope:
      "Designed for Lancaster Residences Phase 2 and authorized administrators and registered homeowners. The proposal excludes online payment processing, SMS, a mobile application, and integrations with banks, government agencies, or third-party payment gateways; access depends on an internet connection.",
    technologies: [
      "Laravel 12",
      "PHP",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "Alpine.js",
      "Vite",
      "JavaScript",
      "Laravel Breeze",
      "Eloquent ORM",
      "Chart.js",
      "DomPDF",
      "Laravel Excel",
      "Git & GitHub",
    ],
    image: "/projects%20img/hoa.png",
    features: [
      "Homeowner registration and profile management",
      "Announcements and in-portal reminders",
      "Concern and service-request tracking with action records",
      "Billing, payment history, balance, and penalty monitoring",
      "Vehicle registration and car-sticker status tracking",
      "Administrative dashboard and report generation",
    ],
    challenges: [],
    learnings: [],
  },
  {
    id: "clover",
    title: "CLOVER",
    subtitle: "Comprehensive Learning Operations for Verified Educational Records",
    description:
      "Project CLOVER is a centralized ICT records and compliance management platform designed to help the Schools Division Office and participating schools manage, monitor, validate, and report ICT-related records in one digital system. It supports real-time data encoding, centralized record management, compliance monitoring, data validation, and report generation.",
    longDescription:
      "Project CLOVER is a centralized ICT records and compliance management platform designed to help the Schools Division Office and participating schools manage, monitor, validate, and report ICT-related records in one digital system. It supports real-time data encoding, centralized record management, compliance monitoring, data validation, and report generation.",
    problem:
      "Before CLOVER, ICT records and compliance information could be managed through paper forms, printed templates, and separate spreadsheets. This could result in fragmented storage, repetitive encoding, delayed consolidation, and inconsistencies in reports. CLOVER centralizes these processes into one digital platform.",
    solution:
      "CLOVER centralizes ICT record management, monitoring, validation, and reporting for the Division Office and participating schools.",
    purpose:
      "To replace fragmented paper-based records, spreadsheets, repetitive encoding, and delayed report consolidation with a centralized digital platform.",
    functions: [
      {
        title: "ICT Records Management",
        details: [
          "Centralized storage and management of ICT records.",
          "Standardizes ICT information across schools and the Division Office.",
        ],
      },
      {
        title: "Technical Assistance Management",
        details: [
          "Records and manages Technical Assistance requests and ICT support activities.",
        ],
      },
      {
        title: "Profile Sheet Management",
        details: [
          "Maintains standardized ICT profile information for participating schools.",
        ],
      },
      {
        title: "DCP Utilization Monitoring",
        details: [
          "Monitors and records the utilization of DCP-related ICT resources.",
        ],
      },
      {
        title: "Annual Monitoring Plans",
        details: [
          "Manages monitoring plans and supports tracking of ICT monitoring activities.",
        ],
      },
      {
        title: "Compliance Monitoring",
        details: [
          "Monitors compliance indicators and helps identify incomplete or missing records.",
        ],
      },
      {
        title: "Report Generation",
        details: [
          "Generates official reports from centralized and verified records.",
          "Reduces repetitive manual consolidation.",
        ],
      },
      {
        title: "Data Validation and Audit",
        details: [
          "Supports checking encoded information against verified records.",
          "Helps maintain accuracy and consistency of ICT data.",
        ],
      },
      {
        title: "Role-Based Access",
        details: [
          "Provides controlled access based on user roles and responsibilities.",
        ],
      },
      {
        title: "Activity and Access Monitoring",
        details: [
          "Records and monitors system access and user activity for accountability and security.",
        ],
      },
      {
        title: "Dashboard and Data Analysis",
        details: [
          "Presents useful information through dashboards and analyzable reports to support planning and decision-making.",
        ],
      },
    ],
    users: [
      "Schools Division Office ICT personnel",
      "ICT Coordinators",
      "School Heads",
      "Authorized school personnel",
      "Division staff responsible for ICT monitoring and records",
    ],
    impact: [
      "Reduce manual paperwork",
      "Reduce repetitive data encoding",
      "Improve accuracy and consistency of ICT records",
      "Make records easier to access",
      "Improve compliance monitoring",
      "Speed up report preparation",
      "Support data-driven planning",
      "Improve transparency and accountability",
    ],
    technologies: [
      "CakePHP",
      "PHP",
      "MySQL",
      "JSON",
      "WebSockets",
      "Chart.js",
      "jQuery",
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
      "PDF and Excel extraction tools",
    ],
    image: "/projects%20img/clover%202.png",
    features: [],
    challenges: [],
    learnings: [],
  },
  {
    id: "201-checklist",
    title: "201 CHECKLIST",
    subtitle: "Web-Based 201 File Inventory and Management System",
    description:
      "An HR records management platform that digitalizes personnel 201 files and provides document inventory and checklist monitoring for tracking record completeness.",
    longDescription:
      "201 CHECKLIST is a web-based 201 File Inventory and Management System designed to help HR personnel digitally manage, organize, and monitor the 201 files of teaching and non-teaching personnel. The system provides a centralized repository for scanned personnel documents while using a checklist and inventory system to identify available, missing, and incomplete records.",
    problem:
      "The HR Office previously relied on paper-based 201 files stored in physical folders and file boxes. This required HR personnel to manually sort, retrieve, update, and check documents. Missing or misplaced records could be difficult to identify, while frequent handling of physical documents created risks of loss, damage, and deterioration.",
    solution:
      "201 CHECKLIST centralizes personnel records into a digital platform and combines document management with an inventory and checklist system, making it easier to retrieve records and monitor document completeness.",
    purpose:
      "To digitally manage, organize, and monitor personnel 201 files, while providing an inventory and checklist for identifying available, missing, and incomplete documents.",
    functions: [
      {
        title: "Digital 201 File Management",
        details: [
          "Digitally stores scanned personnel documents.",
          "Reduces dependence on physical folders and paper-based records.",
        ],
      },
      {
        title: "Personnel Document Management",
        details: [
          "Upload, view, update, and delete personnel documents when necessary.",
        ],
      },
      {
        title: "201 File Checklist",
        details: [
          "Tracks required documents for each employee.",
          "Identifies available documents, missing documents, and incomplete 201 files.",
        ],
      },
      {
        title: "Document Inventory",
        details: [
          "Provides an organized inventory of personnel records.",
          "Allows HR personnel to quickly determine which documents are available or missing.",
        ],
      },
      {
        title: "Personnel Record Retrieval",
        details: [
          "Makes personnel records easier to locate and access.",
          "Reduces the time required to manually search through physical folders.",
        ],
      },
      {
        title: "Authentication and Role-Based Access",
        details: [
          "Requires authorized user authentication.",
          "Restricts system functions and personnel records according to assigned roles.",
        ],
      },
      {
        title: "HR Monitoring",
        details: [
          "Provides organized views of missing, incomplete, and available documents.",
          "Helps HR personnel monitor the overall completeness of employee 201 files.",
        ],
      },
    ],
    documentCategories: [
      "Appointments",
      "Certifications",
      "Commendations / Awards",
      "Communications / Orders / Cases",
    ],
    users: [
      "HR Personnel",
      "Authorized Schools Division Office HR Staff",
      "Other authorized personnel responsible for 201 file management",
    ],
    benefits: [
      "Faster document retrieval",
      "Better organization of personnel records",
      "Easier monitoring of 201 file completeness",
      "Reduced manual checking",
      "Reduced risk of document loss or damage",
      "Improved data accuracy",
      "Controlled access to personnel records",
      "More organized HR record management",
    ],
    scope:
      "Digital storage, inventory tracking, and checklist monitoring of personnel 201 files for teaching and non-teaching staff.",
    technologies: [
      "CakePHP",
      "PHP",
      "MySQL",
      "JSON",
      "WebSockets",
      "Chart.js",
      "jQuery",
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
      "PDF and Excel extraction tools",
    ],
    image: "/projects%20img/SDO%20HR.png",
    features: [],
    challenges: [],
    learnings: [],
  },
  {
    id: "sacmatic",
    title: "SACMATIC",
    subtitle: "IoT-Based Water Monitoring System for SACDECO Tilapia Fingerling Hatchery",
    description:
      "An IoT water monitoring system for the SACDECO tilapia hatchery that tracks pH, dissolved oxygen, turbidity, and temperature in real time through a web dashboard, with historical records, reports, recommendations, and SMS alerts.",
    longDescription:
      "SACMATIC combines an IoT sensor system deployed at the SACDECO Tilapia Hatchery with a web application for office personnel and farmers. It provides real-time water readings, historical data tracking, reports, recommendations, and SMS alerts when readings exceed defined safe thresholds.",
    problem:
      "Manual water-quality monitoring can be time-consuming and does not provide continuous readings or immediate notice when conditions move outside safe thresholds, making it harder for hatchery personnel to respond promptly.",
    solution:
      "SACMATIC collects readings from four pond sensors and presents them through a web dashboard, with historical tracking, report review, actionable recommendations, and SMS alerts to registered users when a parameter exceeds its safety threshold.",
    purpose:
      "To improve water-quality monitoring at the SACDECO tilapia fingerling hatchery and support timely responses to changing pond conditions.",
    functions: [
      {
        title: "Real-Time Water Monitoring",
        details: [
          "Displays readings from pH, dissolved oxygen, turbidity, and water temperature sensors.",
          "Provides a dashboard for SACDECO office personnel and hatchery farmers.",
        ],
      },
      {
        title: "Historical Data Tracking",
        details: [
          "Shows past sensor readings in graphical form to help identify changes over time.",
          "Allows administrators to export selected historical readings.",
        ],
      },
      {
        title: "Reports and Review",
        details: [
          "Allows farmers or caretakers to submit reports about water-quality issues and responses.",
          "Enables administrators to review submitted reports and track interventions.",
        ],
      },
      {
        title: "Threshold SMS Alerts",
        details: [
          "Sends SMS notifications to registered users when sensor readings exceed defined safe thresholds.",
        ],
      },
      {
        title: "Water-Quality Recommendations",
        details: [
          "Displays actionable recommendations based on readings that fall outside defined ranges.",
        ],
      },
      {
        title: "User and Access Management",
        details: [
          "Provides user management and role-based access for authorized system users.",
        ],
      },
    ],
    users: [
      "SACDECO office personnel and administrators",
      "SACDECO hatchery farmers and caretakers",
    ],
    benefits: [
      "View water-quality readings in real time",
      "Receive alerts when readings exceed safe thresholds",
      "Review historical trends and export selected readings",
      "Submit and review reports about water-quality issues",
      "Support timely, informed responses at the hatchery",
    ],
    scope:
      "Focused on monitoring pH, dissolved oxygen, turbidity, and temperature at the SACDECO Tilapia Hatchery. SACMATIC is a monitoring and alerting system; it does not automatically control water conditions, and corrective actions remain the responsibility of hatchery personnel.",
    technologies: [
      "Laravel 12",
      "PHP",
      "Vue.js",
      "JavaScript",
      "C++",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "MySQL",
      "JSON",
      "Laravel Broadcasting",
      "WebSockets",
      "Laravel Echo",
      "Laravel Reverb",
      "Interworx SMS API",
      "Arduino Uno R3",
      "ESP8266",
      "PCB",
      "pH, DO, turbidity, and temperature sensors",
      "Laravel Sanctum",
    ],
    image: "/projects%20img/SACMATIC.png",
    features: [
      "Real-time readings from four water-quality sensors",
      "Historical charts and exportable sensor readings",
      "Caretaker-submitted reports for administrator review",
      "SMS alerts for readings outside defined safe thresholds",
      "Actionable water-quality recommendations",
      "User management and role-based access",
    ],
    challenges: [],
    learnings: [],
  },
];
