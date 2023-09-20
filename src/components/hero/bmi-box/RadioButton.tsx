interface RadioButtonProps {
  title: string;
  isDefault: boolean;
  setIsMetric: React.Dispatch<React.SetStateAction<boolean>>;
}

const RadioButton = ({ title, isDefault, setIsMetric }: RadioButtonProps) => {
  function handleOnClick() {
    if (title === "metric") setIsMetric(true);
    else setIsMetric(false);
  }
  return (
    <span className="flex items-center gap-4">
      <input
        type="radio"
        name="input-type"
        id={title}
        value={"title"}
        defaultChecked={isDefault}
        className="form-radio border-gray-200 checked:bg-black checked:text-red-300 p-4 focus:ring-0 focus:ring-offset-0"
        onClick={handleOnClick}
      />
      <label
        htmlFor={title}
        className="font-semibold text-[#253347] first-letter:uppercase"
      >
        {title}
      </label>
    </span>
  );
};

export default RadioButton;
