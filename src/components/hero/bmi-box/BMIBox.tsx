import RadioButton from "./RadioButton";
import InputContainer from "./InputContainer";
import Results from "./Results";

const BMIBox = () => {
  return (
    <div
      className={`z-10 mt-4 grid h-fit w-full gap-6 rounded-2xl bg-white p-6  drop-shadow-[16px_32px_56px_rgb(143,174,207,25%)] lg:mt-0`}
    >
      <h2 className="text-2xl font-semibold text-[#253347]">
        Enter your details below
      </h2>
      <div className="grid grid-cols-2 place-items-stretch gap-[24px]">
        <RadioButton title="metric" isDefault={true} />
        <RadioButton title="imperial" isDefault={false} />
      </div>
      <InputContainer />
      <Results />
    </div>
  );
};

export default BMIBox;
