export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  type: "work" | "project" | "achievement";
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Data Entry Specialist",
    company: "JQ BPO Global Solutions Inc.",
    period: "2024 - Present",
    description: [
      "Accurately inputting and managing data in company systems",
      "Ensuring data quality and consistency across databases",
      "Supporting various departments with data management needs",
    ],
    type: "work",
  },
  {
    id: "2",
    title: "Web Development Competition",
    company: "Academic Achievement",
    period: "2023",
    description: [
      "Participated in web development competition",
      "Built responsive and functional web applications",
      "Demonstrated proficiency in modern web technologies",
    ],
    type: "achievement",
  },
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  institution: "Northeastern College",
  year: "2022 - 2026",
  achievements: [
    "Completed coursework in web development, databases, and software engineering",
    "Participated in web development competition",
    "Developed multiple capstone projects using modern technologies",
  ],
};
