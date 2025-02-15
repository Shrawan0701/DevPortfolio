import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
 
  {
    id: 1,
    title: "Backend Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I enhance digital applications with robust, scalable backend infrastructures. I develop efficient database structures, APIs, and configure servers for optimal performance, security, and scalability, ensuring your applications handle high traffic and complex data management seamlessly. Rely on strong backend solutions.",
  },
  {
    id: 2,
    title: "DevOps",
    icons: [
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "I streamline development and operations processes.",
    description:
      "I streamline development and operations processes through effective DevOps practices. I implement continuous integration and deployment pipelines, manage cloud infrastructure, and use containerization to ensure efficient, reliable, and scalable software delivery. Improve your workflow with DevOps solutions.",
  },

  {
    id: 3,
    title: "Problem-Solving",
    icons: [
      "/skills/dsa.png",
      "/skills/problem.jpeg",
      "/skills/solving.jpeg",
      "/skills/think.jpeg",
      "/skills/brain.jpeg",
    ],
    shortDescription: "Strong analytical and problem-solving skills with a solid understanding of data structures and algorithms.",
    description:
      "Experienced in optimizing code efficiency and designing scalable solutions. Data Structures And Algorithms.",
  },

];

export default services;
