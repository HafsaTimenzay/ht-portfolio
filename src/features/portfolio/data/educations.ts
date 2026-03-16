import type { Education } from "../types/educations"

export const EDUCATIONS: Education[] = [
  {
    id: "edu-1",
    schoolName: "Application Development & Artificial Intelligence",
    level: [
      {
        id: "est-casablanca",
        title: "École Supérieure de Technologie (EST)",
        formationPeriod: {
          start: "10.2025",
          end: "06.2026",
        },
        icon: "education",
        description: `- Currently pursuing a Bachelor's degree in Digital Development & Artificial Intelligence in Casablanca, Morocco.\n- Focusing on applied AI, full-stack development, and modern software engineering practices.\n- Language Proficiency: B2 in English, B1 in French, C1 in Arabic (CEFR).`,
        skills: [
          "Design Pattern",
          "Docker",
          "Virtualization",
          "ML",
          "DL",
          "NLP",
          "Generative AI",
          "NodeJs",
          "Angular",
          "Express.Js",
          "UX/UI",
          "Agile",
        ],
      },
    ],
  },
  {
    id: "edu-2",
    schoolName: "Digital Development",
    level: [
      {
        id: "cmc-souss",
        title: "CMC Souss-Massa",
        formationPeriod: {
          start: "09.2023",
          end: "06.2025",
        },
        icon: "education",
        description: `- Obtained a Specialized Technician diploma in Digital Development in Agadir, Morocco.\n- Gained hands-on experience in web and mobile development, databases, and cloud technologies.\n- Completed a final year internship building a Flutter mobile app for student orientation.`,
        skills: [
          "HTML/CSS",
          "Bootstrap",
          "JavaScript",
          "Algorithms",
          "PHP",
          "Python",
          "Java",
          "Kotlin",
          "Dart",
          "Android",
          "Flutter",
          "React",
          "Spring Boot",
          "MySQL",
        ],
      },
    ],
  },
  {
    id: "edu-3",
    schoolName: "Physics and Chemistry",
    level: [
      {
        id: "ibn-sina",
        title: "Ibn Sina High School",
        formationPeriod: {
          start: "09.2022",
          end: "06.2023",
        },
        icon: "education",
        description: `- Graduated with a High School Diploma in Physics and Chemistry in Biougra, Morocco.\n- Developed an early interest in technology and problem-solving, laying the foundation for a career in software development.`,
        skills: ["Mathematics", "Physics", "Chemistry"],
      },
    ],
  },
]
