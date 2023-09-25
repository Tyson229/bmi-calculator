import { useSelector } from "react-redux";
import { BMIState } from "../../../store";

export const isMetric = useSelector((state: BMIState) => state.isMetric);
export const kg = useSelector((state: BMIState) => state.kg);
export const cm = useSelector((state: BMIState) => state.cm);
export const ft = useSelector((state: BMIState) => state.ft);
export const ins = useSelector((state: BMIState) => state.ins);
export const st = useSelector((state: BMIState) => state.st);
export const lbs = useSelector((state: BMIState) => state.lbs);
