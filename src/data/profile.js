export const profile = {
  name: "Kiruthika M",
  role: "Software Developer",
  tagline: "React.js UI engineer building responsive, real-time dashboards.",
  location: "Tirupur, Tamil Nadu, India",
  email: "kiruthikamanoharan47@gmail.com",
  phone: "+91 87785 33287",
  linkedin: "https://www.linkedin.com/in/kiruthika-manoharan-b6a03b297",
  github: "https://github.com/kiruthikamanoharan2005-creator",
  resume: "/assets/Kiruthika-Resume.pdf",
  summary:
    "Software Developer with 1+ year of experience specializing in React.js, real-time dashboard development, and REST API integration. Promoted from intern to full-time within 6 months at Altius Technologies. Skilled in scalable, responsive applications for manufacturing and analytics domains using JavaScript, Highcharts, and ECharts.",
  metrics: [
    { value: "1+", label: "Year frontend experience" },
    { value: "8+", label: "Dashboards and pages built" },
    { value: "40%", label: "Render reduction achieved" },
    { value: "9.2", label: "B.Sc. IT GPA" },
  ],
};

export const skills = [
  {
    group: "Languages",
    items: ["JavaScript ES6+", "HTML5", "CSS3", "TypeScript Basic"],
  },
  {
    group: "Frontend",
    items: ["React.js", "React Router", "Tailwind CSS", "Material UI"],
  },
  {
    group: "Visualization",
    items: ["Highcharts", "ECharts", "Chart.js", "D3.js Basic"],
  },
  {
    group: "State & Architecture",
    items: ["React Hooks", "Context API", "Redux Basic", "SPA Architecture"],
  },
  {
    group: "API & Data",
    items: ["REST API", "Axios", "JSON", "Real-Time Data", "WebSocket Basic"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Backend API Call"],
  },
  {
    group: "Workflow",
    items: ["Git", "GitHub", "Docker", "VS Code", "Figma Basic", "Agile Scrum"],
  },
];

export const softSkills = [
  {
    title: "Problem Solving",
    description: "Analytical thinking & solution design",
    color: "#572af9",
    gradient: "linear-gradient(135deg, #572af9 0%, #8b66fb 100%)",
  },
  {
    title: "Communication",
    description: "Clear & effective expression",
    color: "#c45a43",
    gradient: "linear-gradient(135deg, #c45a43 0%, #ff8a65 100%)",
  },
  {
    title: "Collaboration",
    description: "Team & cross-functional work",
    color: "#16a34a",
    gradient: "linear-gradient(135deg, #16a34a 0%, #4ade80 100%)",
    image: "/assets/team-collaboration.svg",
  },
  {
    title: "Adaptability",
    description: "Fast learning & flexibility",
    color: "#f3b43f",
    gradient: "linear-gradient(135deg, #f3b43f 0%, #ffd54f 100%)",
  },
  {
    title: "Attention to Detail",
    description: "Precision & quality focus",
    color: "#0ea5e9",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #29b6f6 100%)",
  },
  {
    title: "Time Management",
    description: "On-time delivery & planning",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f06292 100%)",
  },
  {
    title: "Self-Motivation",
    description: "Initiative & drive",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
  },
];

export const experience = [
  {
    role: "Software Developer",
    company: "Altius Technologies",
    period: "July 2025 - Present",
    current: true,
    sections: [
      {
        heading: "Real-time Production Dashboards",
        points: [
          "Built 10+ real-time dashboards including KPI, OEE, and shift-based production monitoring screens used daily by manufacturing teams.",
          "Developed Quality Check screens with reject parts entry, reason selection, and live count tracking per machine.",
          "Built a real-time Operator Working Dashboard showing live machine status, run/idle/alarm states per shift.",
          "Implemented Analysis of Production with Pareto charts showing top downtime reasons, idle durations, and cumulative trends.",
        ],
        images: [
          { src: "/assets/kpi.png", alt: "KPI Dashboard" },
          { src: "/assets/quality.png", alt: "Quality Entry Dashboard" },
          { src: "/assets/analysis.png", alt: "Analysis Dashboard" },
        ],
      },
      {
        heading: "ERP Screens",
        points: [
          "Built end-to-end ERP screens covering the full workflow from Sales to Delivery.",
          "Modules include Finance & Accounting, CRM, Purchase, Inventory, BOM, and Production.",
          "Implemented double-entry ledger, cash flow charts, trial balance, profit & loss, and receivables/payables views.",
        ],
        images: [
          { src: "/assets/finance.png", alt: "Finance & Accounting ERP" },
        ],
      },
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Altius Technologies",
    period: "Dec 2024 - Jun 2025",
    current: false,
    highlights: [
      "Developed 5+ interactive dashboards with JavaScript, HTML5, CSS3, real-time data binding, and dynamic UI updates.",
      "Built a reusable library of 15+ UI components, reducing duplication across projects.",
      "Resolved rendering bottlenecks in data-heavy dashboard pages, improving load speed by roughly 25%.",
      "Participated in sprint reviews and daily stand-ups while consistently delivering tasks within sprint deadlines.",
    ],
  },
];

export const projects = [
  {
    title: "Architecture Firm Website",
    stack: ["React.js", "CSS3", "Responsive UI"],
    liveUrl: "https://architecturewebsite-01.netlify.app/",
    githubUrl: "https://github.com/kiruthikamanoharan2005-creator/Project-Architecture",
    summary:
      "A mobile-first architecture portfolio website spanning 8 responsive pages with project galleries, service sections, and polished content flow.",
    outcomes: [
      "Designed clean project pages with responsive layout behavior across phones, tablets, and laptops.",
      "Applied lazy loading and image compression to improve mobile network performance.",
      "Balanced visual presentation with fast navigation and accessible content hierarchy.",
      "Created reusable page sections for hero content, project listings, firm details, and contact information.",
      "Focused on clear spacing, readable typography, and simple navigation for visitors reviewing the firm's work.",
      "Tested layouts across common viewport sizes to keep images, text, and buttons aligned cleanly.",
    ],
  },
  {
    title: "PMS Application",
    stack: ["React.js", "Material UI", "REST API", "ECharts", "Highcharts"],
    summary:
      "A production management system application combining workflow tracking, OEE analytics, machine status, downtime visibility, and real-time production data.",
    outcomes: [
      "Built responsive screens for production planning, monitoring, and daily workflow review.",
      "Created PMS modules for tracking production status, machine activity, parts count, utilization, and downtime.",
      "Implemented shift-based Today vs Yesterday comparisons for instant production gap analysis.",
      "Visualized OEE metrics including Availability, Performance, and Utilization for supervisor review.",
      "Optimized chart rendering for large datasets and smooth high-frequency live interactions.",
      "Integrated live REST feeds with auto-refresh behavior without full-page reloads.",
      "Reduced downtime detection from minutes to seconds through visible, real-time machine states.",
      "Designed responsive views for manufacturing teams monitoring multiple production lines.",
      "Created structured layouts so teams could scan production details with less manual checking.",
      "Used ECharts and Highcharts to present trend lines, KPI cards, comparison charts, and machine summaries.",
      "Organized API-driven dashboard sections into reusable UI patterns for easier maintenance.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution:
      "Sankara College of Science and Commerce, Bharathiyar University, Coimbatore",
    period: "Graduated: May 2025",
    detail: "GPA: 9.2 / 10 | Specialization: Programming Languages & Technologies",
  },
];

export const certifications = [
  {
    title: "Senior Grade Typewriting in English - Distinction",
    issuer: "Government of Tamil Nadu Examination Board",
    period: "2023 - 2024",
  },
  {
    title: "Skill Development Program - Programming Languages & Technologies",
    issuer: "Infosys BPM | 15-day intensive program",
    period: "2025",
  },
];

export const highlights = [
  {
    title: "Product-focused UI work",
    copy: "I build interfaces that feel calm, clear, and useful for real users rather than just visually impressive screens.",
  },
  {
    title: "Live-data products",
    copy: "My background is strongest in dashboards, monitoring tools, and operational apps that need fast feedback and clean data storytelling.",
  },
  {
    title: "Reliable execution",
    copy: "I care about performance, responsiveness, and thoughtful state management so products stay smooth as complexity grows.",
  },
];

export const workingStyle = [
  "Turn messy workflows into intuitive screens",
  "Balance visual polish with performance and accessibility",
  "Collaborate closely through sprint cycles and feedback loops",
  "Keep components reusable so the product scales cleanly",
];

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];
