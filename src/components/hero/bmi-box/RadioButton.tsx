import { useDispatch } from "react-redux";
import { setIsMetric } from "../../../store";

interface RadioButtonProps {
  title: string;
  isDefault: boolean;
}

const RadioButton = ({ title, isDefault }: RadioButtonProps) => {
  const dispatch = useDispatch();
  function handleOnClick() {
    if (title === "metric") dispatch(setIsMetric(true));
    else dispatch(setIsMetric(false));
  }
  return (
    <span className="flex items-center gap-4 ">
      <input
        type="radio"
        name="input-type"
        id={title}
        value={"title"}
        defaultChecked={isDefault}
        className="form-radio border-gray-200 p-4 checked:bg-[#345FF6] hover:cursor-pointer hover:border-[#345FF6] focus:ring-0 focus:ring-offset-0"
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
