export interface achievementInterface {
  title: string;
  type: "Achievement" | "Involvement" | "Certification";
  organization: string;
  year: string;
  description: string;
  location?: string;
  link?: string;
}

export const achievementsUnsorted: achievementInterface[] = [
  // Certifications
  {
    title: "Prompt Design in Vertex AI",
    type: "Certification",
    organization: "Google",
    year: "2025",
    description: "Completed advanced certification in prompt engineering and design using Google's Vertex AI platform.",
  },
  {
    title: "Lean Six Sigma Yellow Belt",
    type: "Certification",
    organization: "ByteDance (TikTok)",
    year: "2023",
    description: "Achieved Yellow Belt certification in Lean Six Sigma methodology for process improvement and waste elimination.",
  },
  
  // International Achievements
  {
    title: "International Representative - Mubadalah Programme",
    type: "Achievement",
    organization: "Sisters in Islam & European Union",
    year: "2020",
    description: "Represented Malaysia in an international program on Feminism, Human Rights and Religion, sponsored by the European Union (EU).",
    location: "Indonesia",
  },
  {
    title: "International Representative - Archaeology Summer School",
    type: "Achievement",
    organization: "Yunus Emre Institute & Turkish Government",
    year: "2019",
    description: "Represented Malaysia in an international summer school program organized by Yunus Emre Institute, sponsored by Turkish government.",
    location: "Turkey",
  },
  
  // Academic Achievements
  {
    title: "Best Student Award",
    type: "Achievement",
    organization: "International Islamic University Malaysia",
    year: "2019",
    description: "Recognized for outstanding academic performance and contributions during undergraduate studies.",
  },
  {
    title: "Rector's List Award",
    type: "Achievement",
    organization: "International Islamic University Malaysia",
    year: "2018-2019",
    description: "Achieved academic excellence and recognition on the university's Rector's List for superior academic performance.",
  },
  {
    title: "Dean's List Award",
    type: "Achievement",
    organization: "Centre for Foundation Studies, IIUM",
    year: "2015",
    description: "Recognized for academic excellence during foundation studies with CGPA of 3.64.",
  },
  
  // Leadership and Involvements
  {
    title: "Founder",
    type: "Involvement",
    organization: "Sawala",
    year: "2020",
    description: "Founded Sawala, an initiative focused on community building and social impact projects.",
  },
  {
    title: "Head of Academic & Intellectualism",
    type: "Involvement",
    organization: "Persatuan Belia Harmoni Gombak",
    year: "2018-2019",
    description: "Led academic and intellectual development programs for youth organization, promoting critical thinking and scholarly pursuits.",
  },
  {
    title: "Program Coordinator - Global Interfaith Tour",
    type: "Involvement",
    organization: "Global Interfaith Tour Japan",
    year: "2019",
    description: "Coordinated and managed interfaith dialogue programs, fostering cross-cultural understanding and religious harmony.",
    location: "Japan",
  },
  {
    title: "Head of Human Resources",
    type: "Involvement",
    organization: "Persatuan Belia Harmoni Gombak",
    year: "2017-2018",
    description: "Managed human resource operations and team development for youth organization.",
  },
  {
    title: "Program Coordinator - History Festival",
    type: "Involvement",
    organization: "History Festival",
    year: "2017",
    description: "Coordinated and organized educational events promoting historical awareness and cultural heritage.",
  },
  {
    title: "Vice President",
    type: "Involvement",
    organization: "Facilitator Representative Council",
    year: "2015",
    description: "Served as Vice President, representing student interests and facilitating communication between stakeholders.",
  },
  {
    title: "Fundraiser & Advocator",
    type: "Involvement",
    organization: "MyCare, Aqsa Syarif, Buku Jalanan UIA",
    year: "2015-2019",
    description: "Engaged in fundraising and advocacy activities for community service and educational initiatives.",
  },
  {
    title: "State Representative - F1 In Schools",
    type: "Achievement",
    organization: "F1 in Schools Malaysia",
    year: "2012",
    description: "Represented the state in the prestigious F1 in Schools STEM competition, demonstrating excellence in engineering and teamwork.",
  },
];

export const featuredAchievements: achievementInterface[] = achievementsUnsorted
  .filter(item => item.type === "Achievement")
  .slice(0, 6);

export const featuredInvolvements: achievementInterface[] = achievementsUnsorted
  .filter(item => item.type === "Involvement")
  .slice(0, 6);

export const featuredCertifications: achievementInterface[] = achievementsUnsorted
  .filter(item => item.type === "Certification");

// For backward compatibility with existing components
export const contributionsUnsorted = achievementsUnsorted;
export const featuredContributions = achievementsUnsorted.slice(0, 6);