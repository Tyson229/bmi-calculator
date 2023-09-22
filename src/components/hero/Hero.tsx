import { Fragment } from "react";
import Background from "./Background";
import BMIBox from "./bmi-box/BMIBox";

const Hero = () => {
  return (
    <section className="relative grid h-full w-full max-w-screen-xl place-items-center gap-8 px-6 pt-8 md:px-11 md:pb-0 md:pt-11 lg:flex lg:flex-wrap lg:px-0 lg:mb-10">
      <Background />

      <img src="src/assets/logo.svg" className="z-10" />

      <div className="flex gap-8">
        <div className="z-10 flex flex-col gap-6 text-center lg:text-start">
          <h1 className="text-6xl font-bold text-[#253347] ">
            Body Mass Index Calculator
          </h1>
          <p className="text-[#5E6E85] ">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>

        <BMIBox />
      </div>
    </section>
  );
};

export default Hero;
