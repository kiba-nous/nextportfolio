import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
}

export const Projects: ProjectInterface[] = [
  {
    id: "ejencukai",
    companyName: "Ejen Cukai",
    type: "Professional",
    category: ["AI", "Full Stack", "UI/UX"],
    shortDescription:
      "AI-powered tax co-pilot designed to make taxes radically simpler for Malaysians, offering personalized, real-time guidance grounded in local regulations and individual context.",
    websiteLink: "https://ejencukai.my/",
    techStack: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "React",
      "Node.js",
    ],
    startDate: new Date("2025-07-01"),
    endDate: new Date("present"),
    companyLogoImg: "/projects/cukai.png",
  },
  {
    id: "jobified",
    companyName: "Jobified",
    type: "Professional",
    category: ["AI", "Full-stack", "UI/UX"],
    shortDescription:
      " AI-powered job match with upskilling and talent recommendation for jobseekers and recruiters.",
    websiteLink: "#",
    techStack: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "Vue",
      "Node.js",
    ],
    startDate: new Date("2022-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/jobified.png",
  },
  {
    id: "community-impact-initiative",
    companyName: "Persatuan Belia Harmoni",
    type: "Personal",
    category: ["Community", "Leadership", "Social Impact"],
    shortDescription:
      "Led academic and intellectualism initiatives as Head of Department, organizing educational programs.",
    websiteLink: "#",
    techStack: ["Leadership", "Community Building", "Project Management"],
    startDate: new Date("2020-01-01"),
    endDate: new Date("2021-01-01"),
    companyLogoImg: "/projects/sk.png",
  },
  {
    id: "graphic-design",
    companyName: "Graphic Design",
    type: "Personal",
    category: ["Design", "Social Impact", "Creative"],
    shortDescription:
      "Designed posters and logos for social media campaigns, events and competition.",
    websiteLink:
      "https://drive.google.com/file/d/1BilU2KT1VANibz5zwRnzS-By9XJdp7tI/view",
    startDate: new Date("2021-01-01"),
    endDate: new Date("2022-01-01"),
    companyLogoImg: "/projects/graphic.png",
  },
  {
    id: "international-program",
    companyName: "International Programs",
    type: "Personal",
    category: ["Globalization", "Community"],
    shortDescription:
      "Represented Malaysia in international programs on archaeology in Turkey",
    websiteLink: "https://www.yee.org.tr/en/node/11668",
    startDate: new Date("2022-06-01"),
    endDate: new Date("2023-06-01"),
    companyLogoImg: "/projects/global.png",
  },
];

export const featuredProjects = Projects.slice(0, 3);
