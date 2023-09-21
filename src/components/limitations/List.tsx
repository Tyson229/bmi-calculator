import LimitationCard from "./LimitationCard";
import { limitations } from "../../lib/data";
const List = () => {
  return (
    <div className="grid gap-4">
      {limitations.map((limitation, i) => (
        <LimitationCard
          img={limitation.img}
          title={limitation.title}
          description={limitation.description}
          key={i}
        />
      ))}
    </div>
  );
};

export default List;
