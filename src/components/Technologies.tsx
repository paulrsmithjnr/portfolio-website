import { technologies } from "../constants";
import { SectionWrapper } from "./hoc";
import BallCanvas from "./canvas/Ball";
import SectionHeader from "./SectionHeader";
import { useRemoteConfig } from "./RemoteConfigComponent";

const Technologies = () => {
  const configValues = useRemoteConfig();
  return (
    <div className="mb-32">
      <SectionHeader
        text={configValues.technologiesSectionHeading as string}
        highlightCount={4}
      />

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="w-32 h-32 flex flex-col items-center"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <span className="text-white text-center">{technology.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Technologies, "technologies");
