import type { User } from "@/features/portfolio/types/user"

export const USER = {
  firstName: "Hafsa",
  lastName: "Timenzay",
  displayName: "Hafsa Timenzay",
  username: "HafsaTimenzay",
  gender: "female",
  pronouns: "she",
  cv: "/cv/hafsa_timenzay_cv.pdf",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "AI Engineer Student",
    "Full-Stack Developer",
  ],
  address: "Casablanca City, Morocco",
  phoneNumber: "KzIxMiA3MTIgOTYxIDE0Ng==",
  email: "aHRpbWVuemF5QGdtYWlsLmNvbQ==", // base64 encoded
  website: "",
  jobTitle: "AI Engineer",
  jobs: [
    {
      title: "AI Engineer",
      company: "Bachelor Student",
      website: "",
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      website: "",
    },
  ],
  about: `
- **Digital Development** & **AI Bachelor student**, curious and motivated, focused on building real-world web and mobile applications.

- Skilled in React, Flutter, Express.js, PHP, and modern full-stack development.

- Interested in Applied AI (ML, NLP, Generative AI) and using it to create practical, user-centered solutions.

- Passionate about learning new technologies and turning ideas into polished personal projects.

- Currently seeking a final year internship (PFE) in Applied AI or Full-Stack Development.
`,
  avatar: "image/avatar2.png",
  ogImage: "image/og-image.png",
  namePronunciationUrl: "/audio/hafsa.mp3",
  timeZone: "Africa/Casablanca",
  keywords: [
    "hafsa",
    "hafsa timenzay",
    "timenzay",
    "hafsa-timenzay",
    "htimenzay",
    "htimenzay@gmail.com",
    "casablanca",
    "morocco",
    "maroc",

    "digital development",
    "ai student",
    "artificial intelligence",
    "applied ai",
    "machine learning",
    "deep learning",
    "nlp",
    "generative ai",

    "full stack developer",
    "web developer",
    "mobile developer",

    "react",
    "flutter",
    "express",
    "nodejs",
    "php",
    "mysql",
    "supabase",
    "postgresql",
    "docker",
  ],

  dateCreated: "2026-02-12", // YYYY-MM-DD
} satisfies User
