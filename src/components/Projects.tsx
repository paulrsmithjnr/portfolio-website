"use client";

import { Tilt } from "react-tilt";
import { FaLocationArrow } from "react-icons/fa6";

import SectionHeader from "./SectionHeader";
import { useRemoteConfig } from "./RemoteConfigComponent";
import { projects } from "../constants";
import { SectionWrapper } from "./hoc";
import { MovingBorderCard } from "./ui/MovingBorderCard";
import { github, projectImgBg } from "../assets";

const Projects = () => {
  const configValues = useRemoteConfig();

  return (
    <div className="mb-32">
      <SectionHeader
        text={configValues.projectsSectionHeading as string}
        highlightCount={2}
      />
      <div className="flex flex-wrap flex-row items-center justify-center mt-10 gap-7">
        {projects.map((project) => (
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="sm:w-[360px] w-full"
          >
            <MovingBorderCard
              key={project.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="text-white border-slate-800 flex flex-col p-5"
            >
              <div className="relative w-full overflow-hidden">
                <div
                  className="w-full h-full overflow-hidden rounded-xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src={projectImgBg} alt="background" />
                </div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="z-10 absolute bottom-0"
                />
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 flex justify-end m-2"
                  >
                    <div className="bg-black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                      <img
                        src={github}
                        alt="github icon"
                        className="w-1/2 h-1/2 object-contain"
                      />
                    </div>
                  </a>
                )}
              </div>

              <div className="mt-5">
                <h1 className="text-white text-start text-xl md:text-2xl font-bold">
                  {project.title}
                </h1>

                <p className="text-start text-white-100 mt-3 font-semibold">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center mt-5 mb-5">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <a
                  className="flex justify-center items-center mt-5"
                  href={configValues[project.id] as string}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-purple">
                    {configValues.checkSiteButtonText as string}
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </MovingBorderCard>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
