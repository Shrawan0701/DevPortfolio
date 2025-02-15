import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "Java",
        level: SkillLevel.Expert,
        icon: "/skills/java.jpeg",
      },
      {
        title: "JavaScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Expert,
        icon: "/skills/typescript.svg",
      },
    ],
  },

  {
    title: "Frameworks",
    items: [
      {
        title: "Spring Boot",
        level: SkillLevel.Expert,
        icon: "/skills/spring.jpeg",
      },
      {
        title: "Next.js",
        level: SkillLevel.Intermediate,
        icon: "/skills/nextjs.png",
      },
    ],
  },
  
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "DevOps",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Beginner,
        icon: "/skills/docker.png",
      },
      {
        title: "Kubernetes",
        level: SkillLevel.Beginner,
        icon: "/skills/kubernetes.svg",
      },
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "/skills/aws.svg",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "Jenkins",
        level: SkillLevel.Expert,
        icon: "/skills/jenkins.svg",
      },
      {
        title: "Terraform",
        level: SkillLevel.Beginner,
        icon: "/skills/terraform.svg",
      },
    ],
  },
  
];

export default skills;
