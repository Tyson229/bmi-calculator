import CurvyLineLeft from "../../assets/pattern-curved-line-left.svg";
import ManEating from "../../assets/image-man-eating.webp";
const YourResult = () => {
  return (
    <div className="grid w-full max-w-screen-xl items-center gap-12 md:relative md:grid-cols-2 md:gap-8 lg:gap-28">
      <img
        src={ManEating}
        className="md:relative md:-translate-x-12 lg:translate-x-0"
      />
      <img
        src={CurvyLineLeft}
        className="absolute -top-10 right-3 hidden lg:block"
      />

      <div className="mx-6 mb-[4.5rem] mt-12 grid gap-8 md:mx-11 lg:mx-10">
        <div className="text-[32px] font-semibold text-[#253347]">
          What your BMI result means
          <p className="text-base font-normal text-[#5E6E85] ">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourResult;
