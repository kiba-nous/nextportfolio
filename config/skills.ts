import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Artificial Intelligence",
    description:
      "Building innovative AI-native solutions and strategic implementations for various industries.",
    rating: 5,
    icon: Icons.cyberpunk,
  },
  {
    name: "Prompt Engineering",
    description:
      "Designing and optimizing AI prompts for maximum efficiency and accuracy in AI applications.",
    rating: 5,
    icon: Icons.cyberpunk,
  },
  {
    name: "Data Analysis",
    description:
      "Analyzing complex datasets to derive actionable insights and drive business decisions.",
    rating: 5,
    icon: Icons.arrowRight,
  },
  {
    name: "Design Thinking",
    description:
      "Applying human-centered design approaches to solve complex problems and innovate solutions.",
    rating: 5,
    icon: Icons.retro,
  },
  {
    name: "Leadership",
    description:
      "Leading teams and organizations through strategic vision, effective communication, and mentorship.",
    rating: 5,
    icon: Icons.user,
  },
  {
    name: "Entrepreneurship",
    description:
      "Building and scaling innovative businesses from concept to execution, including founding Employou Technologies.",
    rating: 5,
    icon: Icons.star,
  },
  {
    name: "AI Ethics and Governance",
    description:
      "Implementing responsible AI practices and ensuring ethical considerations in AI development.",
    rating: 4,
    icon: Icons.check,
  },
  {
    name: "Quality Assurance",
    description:
      "Ensuring high standards in processes, products, and services through systematic quality control methods.",
    rating: 4,
    icon: Icons.check,
  },
  {
    name: "Full-stack Development",
    description:
      "Developing end-to-end software solutions with modern technologies and frameworks.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "Communication",
    description:
      "Effectively communicating complex ideas across diverse audiences and cultural contexts.",
    rating: 5,
    icon: Icons.contact,
  },
  {
    name: "Writing",
    description:
      "Creating compelling content, documentation, and strategic communications across various formats.",
    rating: 4,
    icon: Icons.post,
  },
  {
    name: "UI/UX Design",
    description:
      "Designing user-centered interfaces and experiences that are both functional and aesthetically pleasing.",
    rating: 4,
    icon: Icons.retro,
  },
  {
    name: "Lean Six Sigma",
    description:
      "Applying process improvement methodologies to optimize operations and eliminate waste.",
    rating: 4,
    icon: Icons.arrowRight,
  },
  {
    name: "Agile",
    description:
      "Implementing agile methodologies for efficient project management and iterative development.",
    rating: 4,
    icon: Icons.arrowRight,
  },
  {
    name: "Community Building",
    description:
      "Creating and nurturing communities around shared goals and values for collective impact.",
    rating: 4,
    icon: Icons.user,
  },
  {
    name: "Problem Solving",
    description:
      "Approaching complex challenges with analytical thinking and innovative solution design.",
    rating: 5,
    icon: Icons.cyberpunk,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);