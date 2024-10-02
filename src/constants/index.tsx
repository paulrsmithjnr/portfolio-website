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
      "Collaborate cross-functionally with data scientists, business users, project managers, and engineers to deliver optimal solutions.",
      "Support the entire application lifecycle for mobile applications, including design, testing, release, and maintenance.",
      "Develop software solutions by studying user requirements and analyzing systems flow.",
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
      "Demonstrated leadership and mentorship skills by providing guidance and overseeing the work of interns, ensuring their growth and development. ",
      "Conducted thorough code reviews to maintain code quality and adherence to best practices.",
      "Ensured the seamless operation of enterprise applications by actively providing maintenance support, effectively resolving issues, and implementing timely updates to uphold optimal performance.",
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
      "Ensured the seamless operation of enterprise applications by actively providing maintenance support, effectively resolving issues, and implementing timely updates to uphold optimal performance.",
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
      "Enhanced functionality and user experience of e-commerce web and mobile applications through successful implementation of innovative features, while also expanding API endpoints to bolster overall system capabilities.",
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
      "Added to the successful implementation, testing, debugging, and deployment of high-quality software solutions, ensuring their seamless integration into the production environment.",
      "Compiled comprehensive documentation for various projects, enabling streamlined communication, and knowledge sharing for future reference.",
    ],
    tools: [
      tools.javaScript,
      tools.typeScript,
      tools.vueJs,
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
  id: number;
  title: string;
  description: string;
  img: string;
  iconLists: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    description:
      "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
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
];
