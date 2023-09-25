import { useSelector } from "react-redux";
import { BMIState } from "../../../store";

const layoutStyle =
  "text-white grid rounded-2xl bg-gradient-to-r from-[#345FF6] to-[#587DFF] p-8   md:rounded-r-[3.5rem]  md:grid-cols-2 md:items-center";

const Results = () => {
  const isMetric = useSelector((state: BMIState) => state.isMetric);
  const kg = useSelector((state: BMIState) => state.kg);
  const cm = useSelector((state: BMIState) => state.cm);
  const ft = useSelector((state: BMIState) => state.ft);
  const ins = useSelector((state: BMIState) => state.ins);
  const st = useSelector((state: BMIState) => state.st);
  const lbs = useSelector((state: BMIState) => state.lbs);

  function calculateBMI() {
    if (isMetric) {
      return Math.round((kg / Math.pow(cm / 100, 2)) * 10) / 10;
    } else {
      return (
        Math.round(
          (((st * 14 + lbs) * 703) / Math.pow(ft * 12 + ins, 2)) * 10,
        ) / 10
      );
    }
  }

  function calculateWeight(bmi: number) {
    if (isMetric) return Math.round(bmi * Math.pow(cm / 100, 2) * 10) / 10;

    return (bmi * Math.pow(ft * 12 + ins, 2)) / 703;
  }

  const result = cm || ft || ins ? calculateBMI() : 0;
  const minWeight = calculateWeight(18.5);
  const maxWeight = calculateWeight(24.9);

  const maxWeightInSt = Math.floor(maxWeight / 14);
  const maxWeightInLbs = Math.round((maxWeight % 14) * 10) / 10;
  const minWeightInSt = Math.floor(minWeight / 14);
  const minWeightInLbs = Math.round((minWeight % 14) * 10) / 10;

  const range = () => {
    if (result < 18.5) return "underweight";
    if (result < 25) return "healthy weight";
    if (result < 30) return "overweight";
    return "obese";
  };

  return result ? (
    <div className={`${layoutStyle} gap-6`}>
      <div className="grid gap-2">
        <p className="font-bold">Your BMI is...</p>
        <p className="text-5xl font-semibold">{result}</p>
      </div>
      <div className="text-sm">
        Your BMI suggests you're a {range()} . Your ideal weight is between
        <br />
        <span className="font-semibold">
          {isMetric
            ? minWeight + "kgs - " + maxWeight + "kgs"
            : minWeightInSt +
              "st " +
              minWeightInLbs +
              "lbs - " +
              maxWeightInSt +
              "st " +
              maxWeightInLbs +
              "lbs"}
        </span>
      </div>
    </div>
  ) : (
    <div className={`${layoutStyle} gap-4`}>
      <h3 className="text-2xl font-semibold">Welcome!</h3>
      <p>Enter your height and weight and you'll see your BMI result here</p>
    </div>
  );
};

export default Results;
