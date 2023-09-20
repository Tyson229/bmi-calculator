import { useState } from "react";
import RadioButton from "./RadioButton";
import InputContainer from "./InputContainer";
import Results from "./Results";

const BMIBox = () => {
  const [isMetric, setIsMetric] = useState<boolean>(true);
  return (
    <div className="bg-white z-10 m-4 grid w-full gap-6 rounded-2xl p-6 drop-shadow-[16px_32px_56px_rgb(143,174,207,25%)]">
      <h2 className="text-2xl font-semibold text-[#253347]">
        Enter your details below
      </h2>
      <div className="grid grid-cols-2 place-items-stretch gap-[24px]">
        <RadioButton title="metric" isDefault={true} setIsMetric={setIsMetric}/>
        <RadioButton title="imperial" isDefault={false} setIsMetric={setIsMetric}/>
      </div>

      <div className="grid gap-4">
        <InputContainer label="height" isMetric={isMetric} />
        <InputContainer label="weight" isMetric={isMetric} />
      </div>
      <Results result={12.4} />
    </div>
  );
};

export default BMIBox;
