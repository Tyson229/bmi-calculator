import LimitationCard from "./LimitationCard";
import { limitations } from "../../lib/data";
const List = () => {
  return (
    <div className="grid gap-4 md:grid-cols-4 md:gap-x-[15px] md:gap-y-6">
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

export default List;
