import { tips } from "../../lib/data";
import TipBox from "./TipBox";

const Tips = () => {
  return (
    <div className="grid gap-10 bg-gradient-to-tl from-[#D6E6FE]/30 to-[rgb(214,252,254,0%)] px-6 py-14 md:px-10 md:py-[60px]">
      {tips.map((tip, i) => (
        <TipBox
          img={tip.img}
          title={tip.title}
          description={tip.description}
          key={i}
        />
      ))}
    </div>
  );
};

export default Tips;
