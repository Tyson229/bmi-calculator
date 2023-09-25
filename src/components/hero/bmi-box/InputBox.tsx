import { useDispatch } from "react-redux";
import { setCm, setFt, setIns, setKg, setLbs, setSt } from "../../../store";

interface InputBoxProps {
  digit: string;
  name:string;
  id:string;
}

const InputBox = ({ digit,name,id }: InputBoxProps) => {
  const dispatch = useDispatch();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    switch (digit) {
      case "kg": {
        dispatch(setKg(+e.target.value));
        break;
      }
      case "cm": {
        dispatch(setCm(+e.target.value));
        break;
      }
      case "ft": {
        dispatch(setFt(+e.target.value));
        break;
      }
      case "in": {
        dispatch(setIns(+e.target.value));
        break;
      }
      case "st": {
        dispatch(setSt(+e.target.value));
        break;
      }
      case "lbs": {
        dispatch(setLbs(+e.target.value));
        break;
      }
      default:
        break;
    }
  }

  return (
    <div className="relative w-full">
      <input
        id={id}
        name={name}
        onChange={(e) => handleInputChange(e)}
        className="relative w-full rounded-xl border-[#D8E2E7] p-4 text-2xl font-bold placeholder:opacity-25 hover:border-[#345FF6] hover:cursor-pointer"
        placeholder={"0"}
      />
      <span className="absolute right-4 top-[25%] select-auto text-2xl font-bold text-[#345FF6]">
        {digit}
      </span>
    </div>
  );
};

export default InputBox;
