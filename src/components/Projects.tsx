"use client";

import { Tilt } from "react-tilt";
import { FiArrowUpRight } from "react-icons/fi";

import SectionHeader from "./SectionHeader";
import { useRemoteConfig } from "./RemoteConfigComponent";
import { projects } from "../constants";
import { SectionWrapper } from "./hoc";
import { MovingBorderCard } from "./ui/MovingBorderCard";
import { github } from "../assets";
import Tooltip from "./ui/Tooltip";

const Projects = () => {
  const configValues = useRemoteConfig();

  const handleCardClick = (projectId: string) => {
    const projectUrl = configValues[projectId] as string;
    if (projectUrl) {
      window.open(projectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="mb-32">
      <SectionHeader
        text={configValues.projectsSectionHeading as string}
        highlightCount={2}
      />
      <div className="flex flex-wrap flex-row items-center justify-center mt-10 gap-7">
        {[...projects].reverse().map((project) => (
          <Tilt
            key={project.id}
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="sm:w-[360px] w-full"
          >
            <MovingBorderCard
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="text-white border-slate-800 flex flex-col p-5 cursor-pointer"
              onClick={() => handleCardClick(project.id)}
            >
              <div className="relative w-full overflow-hidden">
                <div
                  className="w-full h-full overflow-hidden rounded-xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src={project.img} alt={project.title} />
                </div>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 flex justify-end m-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="bg-black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:border hover:border-purple transition-colors duration-300">
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

              <div className="mt-10 w-full space-y-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-center">
                    {project.tools.map((tool, index) => {
                      return (
                        <Tooltip key={index} text={tool.name}>
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/[.2] rounded-full bg-black w-8 h-8 flex justify-center items-center hover:border-purple transition-colors duration-300"
                            style={{
                              transform: `translateX(-${5 * index + 2}px)`,
                            }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <img src={tool?.icon ?? ""} alt={tool.name} className="p-2" />
                          </a>
                        </Tooltip>
                      );
                    })}
                  </div>
                </div>

                <a
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-purple hover:bg-white/[0.08]"
                  href={configValues[project.id] as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open live site in new tab"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Live</span>
                  <span className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white/10 transition-all duration-300 group-hover:bg-purple/20">
                    <FiArrowUpRight className="text-purple transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={14} />
                  </span>
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
