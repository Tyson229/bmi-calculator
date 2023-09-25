import { useSelector } from "react-redux";
import InputBox from "./InputBox";

const InputContainer = () => {
  const isMetric = useSelector(
    (state: { isMetric: boolean }) => state.isMetric,
  );

  const generateFields = (label: string, fields: string[]) => (
    <div className="grid w-full">
      <span className="text-[#5E6E85] first-letter:uppercase">{label}</span>
      <div className={`grid ${fields.length > 1 ? "grid-cols-2" : ""} gap-4`}>
        {fields.map((field) => (
          <InputBox key={field} digit={field} name={field} id={field} />
        ))}
      </div>
    </div>
  );

  const heightFields = isMetric ? ["cm"] : ["ft", "in"];
  const weightFields = isMetric ? ["kg"] : ["st", "lbs"];

  return (
    <div className={`grid ${isMetric ? "md:grid-cols-2" : ""} gap-2`}>
      {generateFields("height", heightFields)}
      {generateFields("weight", weightFields)}
    </div>
  );
};

export default InputContainer;
