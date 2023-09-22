import useWindowDimensions from "../../hooks/useWindowDimensions";
import LimitationsDesktop from "./LimitationsDesktop";
import LimitationsMobile from "./LimitationsMobile";
export const Limitations = () => {
  const { width } = useWindowDimensions();
  return width < 1024 ? <LimitationsMobile /> : <LimitationsDesktop />;
};
