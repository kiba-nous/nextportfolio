import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "employou-tech",
    position: "Founder and CEO",
    company: "Employou Technologies",
    location: "Kuala Lumpur, Malaysia",
    startDate: new Date("2024-01-01"),
    endDate: "Present",
    description: [
      "Building AI-native workforce agents that assist people and organizations in navigating the future of work.",
      "Developing a suite of intelligent agents that support the full human capital journey.",
      "Leading strategic vision and product development for cutting-edge AI solutions.",
    ],
    achievements: [
      "Founded and established Employou Technologies as an AI-focused company.",
      "Developed comprehensive AI strategy for revolutionizing various industries.",
      "Built innovative digital solutions for the future of work.",
      "Leading team in creating AI-native workforce management tools.",
    ],
    skills: [
      "Artificial Intelligence",
      "Entrepreneurship",
      "Leadership",
      "Product Strategy",
      "AI Strategy",
    ],
    companyUrl: "https://employou.tech",
    logo: "/logo.png",
  },
  {
    id: "gamuda-ai-academy",
    position: "AI Full-stack Engineering Apprentice",
    company: "Gamuda AI Academy",
    location: "Kuala Lumpur, Malaysia",
    startDate: new Date("2025-01-06"),
    endDate: new Date("2025-03-28"),
    description: [
      "Comprehensive AI engineering program focusing on full-stack development with AI integration.",
      "Learning cutting-edge AI technologies and practical implementation in real-world projects.",
      "Developing expertise in AI model deployment, machine learning pipelines, and AI-powered applications.",
    ],
    achievements: [
      "Selected for prestigious AI engineering apprenticeship program.",
      "Gained hands-on experience with latest AI frameworks and technologies.",
      "Built full-stack applications integrated with AI capabilities.",
      "Contributed to innovative AI projects in collaboration with industry experts.",
    ],
    skills: [
      "Artificial Intelligence",
      "Full-stack Development",
      "Machine Learning",
      "AI Model Deployment",
      "Python",
    ],
    companyUrl: "https://gamuda.com.my",
    logo: "/experience/gamuda-logo.png",
  },
  {
    id: "tiktok-qa",
    position: "Quality Assurance Analyst",
    company: "ByteDance (TikTok)",
    location: "Kuala Lumpur, Malaysia",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2024-01-01"),
    description: [
      "Conducted quality control processes for content moderation, ensuring alignment with community guidelines and policy standards.",
      "Analyzed data for performance improvement and provided actionable insights.",
      "Collaborated with global policy teams to align moderation practices with cultural nuances across Malaysia.",
    ],
    achievements: [
      "Led to increased accuracy and team efficiency through data-driven insights.",
      "Successfully aligned moderation practices with Malaysian cultural nuances.",
      "Improved quality control processes for content moderation at scale.",
      "Collaborated effectively with global policy teams across different time zones.",
    ],
    skills: [
      "Quality Assurance",
      "Data Analysis",
      "Policy Development",
      "Cross-cultural Communication",
      "Process Improvement",
    ],
    companyUrl: "https://www.tiktok.com",
    logo: "/experience/tiktok-logo.png",
  },
  {
    id: "tiktok-content",
    position: "Content Review Analyst",
    company: "ByteDance (TikTok)",
    location: "Kuala Lumpur, Malaysia",
    startDate: new Date("2020-01-01"),
    endDate: new Date("2022-01-01"),
    description: [
      "Reviewed and moderated user-generated content, upholding platform standards and community guidelines across multiple languages.",
      "Identified trends in content violations and coordinated with policy teams to update moderation protocols.",
    ],
    achievements: [
      "Successfully maintained platform standards across diverse content types.",
      "Identified key trends in content violations leading to protocol improvements.",
      "Coordinated effectively with policy teams to enhance moderation guidelines.",
      "Demonstrated expertise in multilingual content moderation.",
    ],
    skills: [
      "Content Moderation",
      "Policy Analysis",
      "Multilingual Communication",
      "Trend Analysis",
      "Community Guidelines",
    ],
    companyUrl: "https://www.tiktok.com",
    logo: "/experience/tiktok-logo.png",
  },
  {
    id: "mustika-cetak",
    position: "Administrative Assistant",
    company: "Mustika Cetak",
    location: "Langkawi, Malaysia",
    startDate: new Date("2019-06-01"),
    endDate: new Date("2019-08-01"),
    description: [
      "Provided administrative support, including scheduling, document preparation, and client communications.",
      "Designed creative layouts for flyers, business cards, banners, and other marketing materials.",
      "Handled various tasks including graphic design, silk printing for clothing, and general print production.",
    ],
    achievements: [
      "Successfully managed multiple administrative responsibilities simultaneously.",
      "Created effective marketing materials through creative design work.",
      "Gained hands-on experience in print production and graphic design.",
      "Demonstrated versatility in handling diverse business operations.",
    ],
    skills: [
      "Graphic Design",
      "Administrative Support",
      "Client Communication",
      "Print Production",
      "Creative Design",
    ],
    companyUrl: "",
    logo: "/experience/mustika-cetak.png",
  },
];
