import InputBox from "./InputBox";

interface InputContainerProps {
    label : string
    isMetric: boolean
}

const InputContainer = ({label, isMetric} :InputContainerProps) => {
  return (
    <div className="grid gap-2">
      <label className="text-[#5E6E85] first-letter:uppercase">{label}</label>
      {isMetric ? (
        <InputBox digit={label === "height" ? "cm" : "kg"} />
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <InputBox digit={label === "height" ? "ft" : "st"} />
          <InputBox digit={label === "height" ? "in" : "lbs"} />
        </div>
      )}
    </div>
  );
}

export default InputContainer