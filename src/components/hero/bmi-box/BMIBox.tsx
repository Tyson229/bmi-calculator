import { useState } from "react";
import RadioButton from "./RadioButton";
import InputContainer from "./InputContainer";
import Results from "./Results";

const BMIBox = () => {
  const [isMetric, setIsMetric] = useState<boolean>(true);
  return (
    <div className={`z-10 mt-4 grid w-full gap-6 rounded-2xl bg-white p-6 drop-shadow-[16px_32px_56px_rgb(143,174,207,25%)] lg:relative lg:col-start-2 ${isMetric ? 'lg:row-span-4' : 'lg:row-span-5'}`}>
      <h2 className="text-2xl font-semibold text-[#253347]">
        Enter your details below
      </h2>
      <div className="grid grid-cols-2 place-items-stretch gap-[24px]">
        <RadioButton
          title="metric"
          isDefault={true}
          setIsMetric={setIsMetric}
        />
        <RadioButton
          title="imperial"
          isDefault={false}
          setIsMetric={setIsMetric}
        />
      </div>

      <div className={`grid gap-4 ${isMetric ? "md:grid-cols-2" : ""}`}>
        <InputContainer label="height" isMetric={isMetric} />
        <InputContainer label="weight" isMetric={isMetric} />
      </div>
      <Results result={0} />
    </div>
  );
};

export default BMIBox;
