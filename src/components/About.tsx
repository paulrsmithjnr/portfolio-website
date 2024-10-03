import { aboutItems } from "../constants";
import { SectionWrapper } from "./hoc";
import { useRemoteConfig } from "./RemoteConfigComponent";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const About = () => {
  const configValues = useRemoteConfig();
  
  return (
      <BentoGrid className="w-full mb-32">
        {aboutItems.map((aboutItem, i) => (
          <BentoGridItem
            id={aboutItem.id}
            key={i}
            className={aboutItem.className}
            text={configValues[aboutItem.id] as string}
            textClassName={aboutItem.textClassName}
            img={aboutItem.img}
            imgClassName={aboutItem.imgClassName}
            secondImg={aboutItem.secondImg}
          />
        ))}
      </BentoGrid>
  );
};

export default SectionWrapper(About, "about");
