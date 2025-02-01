import {
  typescript,
  reactjs,
  tailwind,
  firebase,
  python,
  java,
  flutter,
  mgi,
  speur,
  ncb,
  gkfg,
  codebg,
  grid,
  uiElement,
  computerBg,
  wink,
  linkedin,
  github,
  instagram,
  portfolio,
  three,
  amnestease,
} from "../assets";

export const tools = {
  javaScript: "JavaScript",
  typeScript: "TypeScript",
  python: "Python",
  java: "Java",
  cSharp: "C# (.NET)",
  reactJs: "React.js",
  ionic: "Ionic",
  angular: "AngularJS",
  vueJs: "Vue.js",
  nuxtJs: "Nuxt.js",
  bootstrap: "Bootstrap",
  tailwindCss: "Tailwind CSS",
  nodeJs: "Node.js",
  express: "Express",
  django: "Django",
  flask: "Flask",
  fastApi: "FastAPI",
  springBoot: "Spring Boot",
  aspNet: "ASP.NET (.NET Core)",
  postgreSQL: "PostgreSQL",
  mySQL: "MySQL",
  firebase: "Firebase",
  git: "Git",
  gitLab: "GitLab",
  bitbucket: "Bitbucket",
  aws: "AWS",
  azure: "Azure",
  docker: "Docker",
  postman: "Postman",
  figma: "Figma",
  jira: "Jira",
  azureDevOps: "Azure DevOps",
  flutter: "Flutter",
  octopusDeploy: "Octopus Deploy",
  kubernetes: "Kubernetes",
  oracleDb: "Oracle Database",
  cosmosDb: "Azure Cosmos DB",
};

export interface NavItem {
  id: string;
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const navItems: NavItem[] = [
  {
    id: "about",
    name: "About",
    link: "#about",
  },
  {
    id: "experience",
    name: "Experience",
    link: "#experience",
  },
  {
    id: "technologies",
    name: "Technologies",
    link: "#technologies",
  },
  {
    id: "projects",
    name: "Projects",
    link: "#projects",
  },
  {
    id: "footer",
    name: "Contact",
    link: "#contact",
  },
];

export interface AboutItem {
  id: string;
  className?: string;
  textClassName?: string;
  img?: string;
  imgClassName?: string;
  secondImg?: string;
}

export const aboutItems: AboutItem[] = [
  {
    id: "one",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    secondImg: computerBg,
  },
  {
    id: "two",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    textClassName: "justify-start items-center text-center",
    img: wink,
    imgClassName:
      "absolute left-1/2 transform -translate-x-1/2 bottom-0 h-32 z-10",
    secondImg: grid,
  },

  {
    id: "three",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    textClassName: "justify-start",
    img: uiElement,
    imgClassName: "absolute -right-10 -bottom-12 md:w-96 w-60",
    secondImg: grid,
  },
  {
    id: "four",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    textClassName: "justify-center text-center items-center",
  },
  {
    id: "five",
    className: "md:col-span-3 md:row-span-2",
    textClassName: "justify-center md:justify-start lg:justify-center",
    img: codebg,
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    secondImg: grid,
  },
  {
    id: "six",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    textClassName: "justify-center md:max-w-full max-w-60 text-center",
  },
];

export interface ExperienceItem {
  id: number;
  title: string;
  companyName: string;
  icon: string;
  startDate: string;
  endDate: string;
  points: string[];
  tools: string[];
}
export const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Software Engineer",
    companyName: "GraceKennedy Financial Group",
    icon: gkfg,
    startDate: "Apr 2023",
    endDate: "Present",
    points: [
      "Enhance the GKOne App with critical bug fixes, performance improvements, and new feature integrations to improve user experience.",
      "Collaborate with data scientists, business users, and engineers to deliver effective solutions.",
      "Support the full application lifecycle, from design to maintenance, ensuring high-quality releases.",
      "Analyze user needs and system workflows to develop efficient, user-centric solutions.",
    ],
    tools: [
      tools.aspNet,
      tools.firebase,
      tools.git,
      tools.gitLab,
      tools.azure,
      tools.postman,
      tools.figma,
      tools.azureDevOps,
      tools.flutter,
      tools.cosmosDb,
    ],
  },
  {
    id: 2,
    title: "Software Developer",
    companyName: "Speur Professional Services LLC.",
    icon: speur,
    startDate: "Sep 2022",
    endDate: "Apr 2023",
    points: [
      "Mentored interns, providing guidance to support their growth and development.",
      "Conducted code reviews to maintain high quality and best practices.",
      "Provided maintenance support, resolving issues, and optimizing performance for enterprise applications."
    ],
    tools: [
      tools.javaScript,
      tools.typeScript,
      tools.python,
      tools.java,
      tools.reactJs,
      tools.angular,
      tools.ionic,
      tools.vueJs,
      tools.bootstrap,
      tools.springBoot,
      tools.oracleDb,
      tools.mySQL,
      tools.flask,
      tools.fastApi,
      tools.postgreSQL,
      tools.firebase,
      tools.git,
      tools.gitLab,
      tools.kubernetes,
      tools.docker,
      tools.aws,
      tools.postman,
      tools.jira,
      tools.octopusDeploy,
      tools.figma,
      tools.flutter,
    ],
  },
  {
    id: 3,
    title: "Developer Analyst (Consultant)",
    companyName: "National Commercial Bank Jamaica Limited",
    icon: ncb,
    startDate: "Jul 2022",
    endDate: "Apr 2023",
    points: [
      "Provided maintenance support to ensure the smooth operation of enterprise applications.",
      "Resolved issues efficiently to minimize downtime and improve reliability.",
      "Implemented timely updates to optimize performance and enhance user experience."
    ],
    tools: [
      tools.javaScript,
      tools.typeScript,
      tools.python,
      tools.java,
      tools.reactJs,
      tools.bootstrap,
      tools.springBoot,
      tools.oracleDb,
      tools.mySQL,
      tools.git,
      tools.gitLab,
      tools.kubernetes,
      tools.postman,
      tools.jira,
      tools.octopusDeploy,
    ],
  },
  {
    id: 4,
    title: "Junior Developer (Intern)",
    companyName: "Speur Professional Services LLC.",
    icon: speur,
    startDate: "Jun 2021",
    endDate: "Sep 2022",
    points: [
      "Implemented features to enhance e-commerce web and mobile applications.",
      "Improved user experience through optimized functionality and design.",
      "Expanded API endpoints to strengthen system capabilities and performance."
    ],
    tools: [
      tools.javaScript,
      tools.typeScript,
      tools.python,
      tools.ionic,
      tools.angular,
      tools.vueJs,
      tools.bootstrap,
      tools.flask,
      tools.fastApi,
      tools.postgreSQL,
      tools.firebase,
      tools.git,
      tools.gitLab,
      tools.docker,
      tools.aws,
      tools.postman,
      tools.figma,
      tools.jira,
      tools.flutter,
    ],
  },
  {
    id: 5,
    title: "Software Developer (Intern)",
    companyName: "Mona GeoInformatics Institute",
    icon: mgi,
    startDate: "Feb 2021",
    endDate: "Apr 2021",
    points: [
      "Developed, tested, and deployed high-quality software solutions.",
      "Ensured seamless integration of software into the production environment.",
      "Created detailed documentation to support communication and knowledge sharing."
    ],
    tools: [
      tools.javaScript,
      tools.typeScript,
      tools.vueJs,
      tools.nuxtJs,
      tools.bootstrap,
      tools.nodeJs,
      tools.express,
      tools.git,
      tools.bitbucket,
      tools.aws,
      tools.postman,
      tools.jira,
    ],
  },
];

export interface Technology {
  name: string;
  icon: string;
}

export const technologies: Technology[] = [
  {
    name: tools.typeScript,
    icon: typescript,
  },
  {
    name: tools.reactJs,
    icon: reactjs,
  },
  {
    name: tools.tailwindCss,
    icon: tailwind,
  },
  {
    name: tools.firebase,
    icon: firebase,
  },
  {
    name: tools.python,
    icon: python,
  },
  {
    name: tools.java,
    icon: java,
  },
  {
    name: tools.flutter,
    icon: flutter,
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  img: string;
  iconLists: string[];
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: "projectOne",
    title: "My Portfolio Website",
    description:
      "A personal portfolio highlighting my skills as a full-stack developer, featuring responsive design, intuitive user experiences, and modern web technologies.",
    img: portfolio,
    iconLists: [reactjs, tailwind, typescript, three, firebase],
    githubLink: "https://github.com/paulrsmithjnr/portfolio-website",
  },
  {
    id: "projectTwo",
    title: "AmnestEase",
    description:
      "A specialized customer management system developed for the National Water Commission (NWC) to efficiently track and manage customers interested in or applying for their amnesty program.",
    img: amnestease,
    iconLists: [reactjs, tailwind, typescript, firebase],
  },
];

export interface SocialMedia {
  id: number;
  name: string;
  img: string;
  url: string;
}

export const socials: SocialMedia[] = [
  {
    id: 1,
    name: "GitHub",
    img: github,
    url: "https://github.com/paulrsmithjnr",
  },

  {
    id: 2,
    name: "LinkedIn",
    img: linkedin,
    url: "https://www.linkedin.com/in/paulrsmithjnr/",
  },
  {
    id: 3,
    name: "Instagram",
    img: instagram,
    url: "https://www.instagram.com/paulrsmithjnr/profilecard/?igsh=dXh4bjU2eWk2MW1q",
  },
];
