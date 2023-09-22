import { tips } from "../../lib/data";
import TipBox from "./TipBox";

const Tips = () => {
  return (
    <div className="flex w-full justify-center bg-gradient-to-tl from-[#D6E6FE]/30 to-[rgb(214,252,254,0%)] lg:w-[calc(100%-1.5rem)] lg:rounded-2xl">
      <div className="grid max-w-screen-xl gap-10  px-6 py-14 md:p-11 md:px-11 md:py-[60px] lg:px-0 lg:py-8 lg:grid-cols-3">
        {tips.map((tip, i) => (
          <TipBox
            img={tip.img}
            title={tip.title}
            description={tip.description}
            key={i}
            style={tip.style}
          />
        ))}
      </div>
    </div>
  );
};

export default Tips;
