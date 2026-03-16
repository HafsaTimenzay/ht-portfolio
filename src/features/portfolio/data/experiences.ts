import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance-web",
    companyName: "Freelance",
    positions: [
      {
        id: "freelance-web-dev-2025",
        title: "Web Developer",
        employmentPeriod: {
          start: "07.2025",
          end: "10.2025",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `- Developed a full-stack educational website for a driving school, providing pedagogical content and clear information for candidates.\n- Built the frontend with React and the backend with Express.js, ensuring a smooth and responsive user experience.`,
        skills: ["React", "Express.js"],
      },
    ],
  },
  {
    id: "crosp",
    companyName: "CROSP Souss-Massa",
    positions: [
      {
        id: "crosp-intern-2025",
        title: "Final Year Intern — Mobile Development",
        employmentPeriod: {
          start: "04.2025",
          end: "06.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Designed and developed a mobile orientation application aimed at helping high school students explore and choose their academic path.\n- Handled UI design and navigation architecture using Flutter, integrating tests, a chatbot, and intelligent filters for a personalized experience.`,
        skills: ["Flutter", "UI/UX Design"],
      },
    ],
  },
  {
    id: "souk-el-ahad",
    companyName: "Souk El-Ahad Orphanage",
    positions: [
      {
        id: "souk-intern-2023",
        title: "Intern — Web Development",
        employmentPeriod: {
          start: "06.2023",
          end: "01.2024",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed a structured web application in PHP following the MVC architecture to manage orphans, activities, and reports.\n- Designed the MySQL database schema and built a clean, accessible Bootstrap interface for staff use.`,
        skills: ["PHP", "MySQL", "Bootstrap"],
      },
    ],
  },
]
