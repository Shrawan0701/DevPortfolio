import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "music-academy",
    title: "Music Academy",
    description:
      "Created a comprehensive music academy platform using Next.js and TypeScript, enhanced with shadcn.",
    icon: "/skills/th.jpeg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Shrawan0701/Music",
    
    tags: ["Next,js","TypeScript", "shadcn"],
  },
  {
    id: "gemini-ai",
    title: "Gemini AI",
    description:
      "Developed a web application using JavaScript, HTML, and CSS that integrates APIs to provide AI-driven functionalities.",
    icon: "/skills/css.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Shrawan0701/Gemini-AI",
    tags: ["JavaScript", "HTML", "CSS"],
  },

  {
    id: "blog-app",
    title: "Blog",
    description:
      "A Blog Application where you can share your knowledge developed using EJS and JavaScript.",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Shrawan0701/Blog",
    tags: ["JavaScript", "EJS"],
  },
  {
    id: "meet-app",
    title: "Meet App",
    description:
      "Developed a real-time communication application using WebRTC technology to enable peer-to-peer video and audio streaming.",
    icon: "/skills/socket-io.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Shrawan0701/webRTC",
    tags: ["webRTC", "socket.io"],
  },
  {
    id: "quiz-app",
    title: "Quiz",
    description:
      "Simple and interactive quiz application developed using Javascript.",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Shrawan0701/Quiz-App",
    tags: ["JavaScript"],
  },
 
  
];
export default projects;
