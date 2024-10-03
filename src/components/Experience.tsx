import { ExperienceItem, experiences } from "../constants";
import { SectionWrapper } from "./hoc";
import { MovingBorderCard } from "./ui/MovingBorderCard";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { parse, differenceInMonths } from "date-fns";
import SectionHeader from "./SectionHeader";
import ToolBadge from "./ui/ToolBadge";
import { useRemoteConfig } from "./RemoteConfigComponent";

function calculateTimeDifference(startDate: string, endDate: string): string {
  const start = parse(startDate, "MMM yyyy", new Date());

  let end: Date;
  if (endDate.toLowerCase() === "present") {
    end = new Date();
  } else {
    end = parse(endDate, "MMM yyyy", new Date());
  }

  const months = differenceInMonths(end, start) + 1;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let result = "";
  if (years > 0) {
    result += `${years} year${years > 1 ? "s" : ""}`;
  }
  if (remainingMonths > 0) {
    if (years > 0) result += ", ";
    result += `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
  }

  return result || "0 months";
}

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#00000000",
        color: "#FFFF",
        padding: 0,
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "#00000000" }}
      date={`${experience.startDate} - ${
        experience.endDate
      } · ${calculateTimeDifference(experience.startDate, experience.endDate)}`}
      iconStyle={{ background: "#FFFF" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <MovingBorderCard
        key={experience.id}
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        className="flex-1 text-white border-slate-800"
      >
        <div className="lg:ms-5 p-3 py-6 md:p-5 lg:p-10">
          <h1 className="text-white text-start text-xl md:text-2xl font-bold">
            {experience.title}
          </h1>
          <p className="text-start text-lg font-semibold" style={{ margin: 0 }}>
            {experience.companyName}
          </p>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-start text-white-100 mt-3 font-semibold"
              >
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-row flex-wrap gap-2">
            {experience.tools.map((tool, index) => (
              <ToolBadge key={index} tool={tool} />
            ))}
          </div>
        </div>
      </MovingBorderCard>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const configValues = useRemoteConfig();

  return (
    <div className="mb-32">
      <SectionHeader
        text={configValues.experienceSectionHeading as string}
        highlightCount={2}
      />
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
