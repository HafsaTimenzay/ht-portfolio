import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "gestion-orphelinat",
    title: "Gestion Orphelinat",
    period: {
      start: "06.2023",
      end: "01.2024",
    },
    link: "",
    skills: [
      "Internship Project",
      "PHP",
      "MySQL",
      "MVC",
      "Bootstrap",
      "Web Development",
    ],
    logo: "image/gestion_orphelinat.png",
    description: `Web application developed during my internship at Souk El-Ahad Orphanage.
- Built with PHP (MVC architecture) and MySQL
- Designed a structured database to manage children, activities, and reports
- Developed a clean Bootstrap-based interface
- Deployed and used internally by the orphanage`,
    isExpanded: true,
  },
  {
    id: "cmc-event",
    title: "CMC Event",
    period: {
      start: "11.2024",
    },
    link: "",
    skills: [
      "Mobile Application",
      "Flutter",
      "Supabase",
      "PostgreSQL",
      "AI Integration",
      "Generative AI",
    ],
    logo: "image/cmc_event.png",
    description: `Flutter mobile application centralizing all CMC events.
- Connected to Supabase backend
- Automatic AI-generated images and descriptions
- Clean UI and structured event management`,
  },
  {
    id: "wejha",
    title: "Wejha",
    period: {
      start: "2025",
    },
    link: "",
    skills: [
      "Mobile Application",
      "Flutter",
      "Dart",
      "Chatbot",
      "UX/UI",
      "Smart Filtering",
    ],
    logo: "/image/wejha.png",
    description: `Orientation mobile app for high school students.
- Integrated orientation tests
- Built-in chatbot assistance
- Dynamic filters to explore schools and programs based on student profile`,
  },
  {
    id: "auto-ecole",
    title: "Auto École Website",
    period: {
      start: "07.2025",
      end: "10.2025",
    },
    link: "",
    skills: [
      "Freelance Project",
      "React",
      "Express.js",
      "Full-Stack",
      "JavaScript",
    ],
    logo: "/image/benomar.png",
    description: `Full-stack educational website developed for a driving school.
- Built with React (frontend) and Express.js (backend)
- Structured content presentation
- User-friendly and responsive design`,
  },
]

// orphelinat
// auto ecole
// jobmate
// wejha
// pollpal
// cmc event
// tamunt
