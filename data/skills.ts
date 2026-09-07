export interface SkillCategory {
  category: string;
  skills: string[];
  icon?: string;
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Bootstrap", "Tailwind CSS"],
    icon: "Code2",
  },
  {
    category: "Backend",
    skills: ["PHP", "CakePHP", "REST API", "MySQL"],
    icon: "Server",
  },
  {
    category: "Mobile",
    skills: ["Flutter"],
    icon: "Smartphone",
  },
  {
    category: "Tools & Other",
    skills: ["Git", "GitHub", "C++", "IoT"],
    icon: "Wrench",
  },
];

export const currentlyLearning = [
  "Next.js",
  "TypeScript",
  "React",
  "REST APIs",
  "Modern UI Development",
];
