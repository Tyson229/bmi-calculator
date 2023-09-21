import { tips } from "../../lib/data";
import TipBox from "./TipBox";

const Tips = () => {
  return (
    <div className="grid gap-10 bg-gradient-to-br from-[#D6FCFE]/0 from-60% to-[#D6E6FE] p-6">
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
