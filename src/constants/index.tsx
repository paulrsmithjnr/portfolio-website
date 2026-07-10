import {
  typescript,
  reactjs,
  expressjs,
  tailwind,
  firebase,
  html,
  css,
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
  rocketrequest,
  cueslyio,
  dynadm,
  dynadmextension,
  resend,
  qaportfolio,
  jampackd,
  jampackdmobile,
  jampackdadmin,
  golddigger,
  outside,
  biblealarm,
  stripe,
} from "../assets";

export interface Tool {
  name: string;
  url: string;
  icon?: string;
}

export const tools: { [key: string]: Tool } = {
  javaScript: {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  html: {
    name: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: html,
  },
  css: {
    name: "CSS3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: css,
  },
  typeScript: {
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
    icon: typescript,
  },
  python: {
    name: "Python",
    url: "https://www.python.org",
    icon: python,
  },
  java: {
    name: "Java",
    url: "https://www.java.com",
    icon: java,
  },
  cSharp: {
    name: "C#",
    url: "https://dotnet.microsoft.com/languages/csharp",
  },
  reactJs: {
    name: "React.js",
    url: "https://reactjs.org",
    icon: reactjs,
  },
  ionic: {
    name: "Ionic",
    url: "https://ionicframework.com",
  },
  angular: {
    name: "AngularJS",
    url: "https://angular.io",
  },
  vueJs: {
    name: "Vue.js",
    url: "https://vuejs.org",
  },
  nuxtJs: {
    name: "Nuxt.js",
    url: "https://nuxtjs.org",
  },
  bootstrap: {
    name: "Bootstrap",
    url: "https://getbootstrap.com",
  },
  tailwindCss: {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    icon: tailwind,
  },
  nodeJs: {
    name: "Node.js",
    url: "https://nodejs.org",
  },
  express: {
    name: "Express",
    url: "https://expressjs.com",
    icon: expressjs,
  },
  django: {
    name: "Django",
    url: "https://www.djangoproject.com",
  },
  flask: {
    name: "Flask",
    url: "https://flask.palletsprojects.com",
  },
  fastApi: {
    name: "FastAPI",
    url: "https://fastapi.tiangolo.com",
  },
  springBoot: {
    name: "Spring Boot",
    url: "https://spring.io/projects/spring-boot",
  },
  dotnet: {
    name: ".NET",
    url: "https://dotnet.microsoft.com",
  },
  postgreSQL: {
    name: "PostgreSQL",
    url: "https://www.postgresql.org",
  },
  mySQL: {
    name: "MySQL",
    url: "https://www.mysql.com",
  },
  firebase: {
    name: "Firebase",
    url: "https://firebase.google.com",
    icon: firebase,
  },
  git: {
    name: "Git",
    url: "https://git-scm.com",
  },
  gitLab: {
    name: "GitLab",
    url: "https://about.gitlab.com",
  },
  bitbucket: {
    name: "Bitbucket",
    url: "https://bitbucket.org",
  },
  aws: {
    name: "AWS",
    url: "https://aws.amazon.com",
  },
  azure: {
    name: "Microsoft Azure",
    url: "https://azure.microsoft.com",
  },
  docker: {
    name: "Docker",
    url: "https://www.docker.com",
  },
  postman: {
    name: "Postman",
    url: "https://www.postman.com",
  },
  figma: {
    name: "Figma",
    url: "https://www.figma.com",
  },
  jira: {
    name: "Jira",
    url: "https://www.atlassian.com/software/jira",
  },
  azureDevOps: {
    name: "Azure DevOps",
    url: "https://azure.microsoft.com/services/devops",
  },
  flutter: {
    name: "Flutter",
    url: "https://flutter.dev",
    icon: flutter,
  },
  octopusDeploy: {
    name: "Octopus Deploy",
    url: "https://octopus.com",
  },
  kubernetes: {
    name: "Kubernetes",
    url: "https://kubernetes.io",
  },
  oracleDb: {
    name: "Oracle Database",
    url: "https://www.oracle.com/database",
  },
  cosmosDb: {
    name: "Azure Cosmos DB",
    url: "https://azure.microsoft.com/services/cosmos-db",
  },
  three: {
    name: "Three.js",
    url: "https://threejs.org",
    icon: three,
  },
  resend: {
    name: "Resend",
    url: "https://resend.com",
    icon: resend,
  },
  stripe: {
    name: "Stripe",
    url: "https://stripe.com",
    icon: stripe,
  },
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

export const resumeUrl = "https://firebasestorage.googleapis.com/v0/b/portfolio-website-4f207.appspot.com/o/Paul%20Smith.pdf?alt=media";

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
  tools: Tool[];
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
      "Enhance the GK ONE App, a financial platform that modernized Jamaica's digital economy by enabling remittances, bill payments, and prepaid card management, making financial services more accessible.",
      "Developed the direct-to-bank registration flow, implemented direct-to-bank transfers for inbound remittances, and integrated mobile wallets within the GK ONE App, expanding digital payment options.",
      "Continuously  enhance  the  remittance  and  onboarding  flows  through  bug  fixes,  performance  optimizations,  and  feature updates to streamline transactions and improve user experience. ",
      "Collaborate within a cross-functional Scrum team of eighteen (18), consisting of software engineers, UI/UX designers, data scientists, marketing professionals, and business stakeholders, to deliver effective solutions for the GK ONE App.",
    ],
    tools: [
      tools.flutter,
      tools.dotnet,
      tools.firebase,
      tools.git,
      tools.azure,
      tools.azureDevOps,
      tools.cosmosDb,
      tools.postman,
    ],
  },
  {
    id: 2,
    title: "Mid-Senior Software Developer",
    companyName: "Speur Professional Services LLC.",
    icon: speur,
    startDate: "Sep 2022",
    endDate: "Apr 2023",
    points: [
      "Mentored interns, providing guidance to support their growth and development.",
      "Conducted code reviews to maintain high quality and best practices.",
      "Provided maintenance support, resolving issues, and optimizing performance for enterprise applications.",
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
      "Implemented timely updates to optimize performance and enhance user experience.",
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
    title: "Software Developer",
    companyName: "Speur Professional Services LLC.",
    icon: speur,
    startDate: "Jun 2021",
    endDate: "Sep 2022",
    points: [
      "Implemented features to enhance e-commerce web and mobile applications.",
      "Improved user experience through optimized functionality and design.",
      "Expanded API endpoints to strengthen system capabilities and performance.",
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
    title: "Software Developer",
    companyName: "Mona GeoInformatics Institute",
    icon: mgi,
    startDate: "Feb 2021",
    endDate: "Apr 2021",
    points: [
      "Developed, tested, and deployed high-quality software solutions.",
      "Ensured seamless integration of software into the production environment.",
      "Created detailed documentation to support communication and knowledge sharing.",
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

export const favouriteTechnologies: Tool[] = [
  tools.flutter,
  tools.typeScript,
  tools.reactJs,
  tools.tailwindCss,
  tools.firebase,
  tools.python,
  tools.java,
];

export interface Project {
  id: string;
  title: string;
  description: string;
  img: string;
  tools: Tool[];
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: "projectOne",
    title: "My Portfolio Website",
    description:
      "A personal portfolio highlighting my skills as a full-stack developer, featuring responsive design, intuitive user experiences, and modern web technologies.",
    img: portfolio,
    tools: [
      tools.reactJs,
      tools.tailwindCss,
      tools.typeScript,
      tools.three,
      tools.firebase,
    ],
    githubLink: "https://github.com/paulrsmithjnr/portfolio-website",
  },
  {
    id: "projectTwo",
    title: "AmnestEase",
    description:
      "A specialized customer management system developed for the National Water Commission (NWC) to efficiently track and manage customers interested in or applying for their amnesty program.",
    img: amnestease,
    tools: [tools.reactJs, tools.tailwindCss, tools.typeScript, tools.firebase],
  },
  {
    id: "projectThree",
    title: "RocketRequest",
    description:
      "A requisition management system developed for Rocketship Jamaica to streamline their procurement process by allowing administrators to generate secure, time-limited links for branches to submit and track their supply requests.",
    img: rocketrequest,
    tools: [tools.reactJs, tools.tailwindCss, tools.typeScript, tools.firebase],
  },
  {
    id: "projectFour",
    title: "Cuesly.io",
    description:
      "A Chrome extension powered by AI that delivers real-time, step-by-step visual guidance to help users seamlessly complete tasks on any website.",
    img: cueslyio,
    tools: [tools.reactJs, tools.express, tools.typeScript, tools.firebase, tools.resend],
  },
  {
    id: "projectFive",
    title: "QA Portfolio Website",
    description:
      "A modern, responsive portfolio website featuring a soft pink theme and smooth animations to showcase Lois-Anne Hall's skills and experience as a Software Quality Assurance Analyst.",
    img: qaportfolio,
    tools: [tools.reactJs, tools.tailwindCss, tools.typeScript, tools.resend],
  },
  {
    id: "projectSix",
    title: "JamPack'd Care Packages",
    description:
      "A responsive e-commerce experience that helps the Jamaican diaspora and culture lovers discover authentic snacks, customize care-package bundles, place orders, and follow deliveries from any device.",
    img: jampackd,
    tools: [
      tools.reactJs,
      tools.tailwindCss,
      tools.typeScript,
      tools.firebase,
      tools.express,
      tools.resend,
      tools.stripe,
    ],
  },
  {
    id: "projectSeven",
    title: "JamPack'd Admin Portal",
    description:
      "Business management dashboard for JamPack'd, providing comprehensive order processing, inventory management, customer analytics, and administrative controls for the e-commerce operation.",
    img: jampackdadmin,
    tools: [
      tools.reactJs,
      tools.tailwindCss,
      tools.typeScript,
      tools.firebase,
      tools.express,
      tools.resend,
      tools.stripe,
    ],
  },
  {
    id: "projectEight",
    title: "JamPack'd Mobile",
    description:
      "A cross-platform mobile app built for iOS and Android that lets the Jamaican diaspora and anyone who loves Jamaican culture easily shop authentic snacks, track orders, and explore curated care-package bundles.",
    img: jampackdmobile,
    tools: [
      tools.flutter,
      tools.firebase,
      tools.express,
      tools.resend,
      tools.stripe,
    ],
  },
  {
    id: "projectNine",
    title: "DynaDM Web App",
    description:
      "A campaign management dashboard for DynaDM that lets teams build Instagram and TikTok DM outreach, organize prospect lists, and track sends with pacing limits, working hours, and Stripe-powered plans.",
    img: dynadm,
    tools: [
      tools.reactJs,
      tools.tailwindCss,
      tools.typeScript,
      tools.firebase,
      tools.stripe,
      tools.resend,
    ],
  },
  {
    id: "projectTen",
    title: "DynaDM Chrome Extension",
    description:
      "A Chrome extension that runs DynaDM automation in the browser, scraping Instagram and TikTok prospects, sending DMs, and syncing campaign status back to the web app in real time.",
    img: dynadmextension,
    tools: [tools.typeScript, tools.html, tools.css, tools.firebase],
  },
  {
    id: "projectEleven",
    title: "GoldDigger",
    description:
      "A trading companion for Deriv synthetic indices with manual and automated execution modes, subscription-gated premium features, and admin tooling.",
    img: golddigger,
    tools: [
      tools.reactJs,
      tools.tailwindCss,
      tools.typeScript,
      tools.firebase,
      tools.express,
      tools.stripe,
      tools.resend,
    ],
  },
  {
    id: "projectTwelve",
    title: "Outside! Mobile App",
    description:
      "A cross-platform mobile app for discovering fun things to do in Jamaica, with ideas matched to your vibe, budget, and parish across date nights, hidden gems, group outings, and at-home activities.",
    img: outside,
    tools: [tools.flutter, tools.firebase],
  },
  {
    id: "projectThirteen",
    title: "Verse O'Clock Mobile App",
    description:
      "A cross-platform Scripture alarm app that helps Christians wake into a focused devotional rhythm with native alarm scheduling, daily Bible readings, reflection prompts, completion questions, and premium devotional plans.",
    img: biblealarm,
    tools: [tools.flutter, tools.firebase],
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
