import { limitations } from "../../lib/data";
import LimitationCard from "./LimitationCard";
import LimitationDescription from "./LimitationDescription";
import CurvedLineRight from "../../assets/pattern-curved-line-right.svg"

const LimitationsDesktop = () => {
  return (
    <div className="relative mb-24 hidden w-full max-w-screen-xl gap-8 lg:grid grid-cols-12 p-4">
      <img
        src={CurvedLineRight}
        className="absolute bottom-[45%] left-[15%]"
      />
      <LimitationDescription style="col-span-5" />
      {limitations.map((limitation, i) => (
        <LimitationCard
          img={limitation.img}
          title={limitation.title}
          description={limitation.description}
          style={limitation.style}
          key={i}
        />
      ))}
    </div>
  );
};

export default LimitationsDesktop;
