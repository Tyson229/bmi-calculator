import BMIBox from "./bmi-box/BMIBox";

const Hero = () => {
  return (
    <section className="relative grid w-full max-w-screen-xl place-items-center gap-8 px-6 pt-8  lg:place-items-start lg:grid-cols-2 lg:grid-row-5 lg:gap-y-7 lg:gap-x-8 lg:items-center">

      <div className="absolute top-0 z-0 h-2/3 w-full max-w-5xl rounded-b-[35px] bg-gradient-to-br  from-white to-[#D6E6FE] lg:right-96 "></div>

      <img src="src/assets/logo.svg" className="z-10 lg:col-span-2" />

      <div className="z-10 grid gap-6 text-center lg:gap-9 lg:text-start lg:row-start-3">
        <h1 className=" text-6xl font-bold text-[#253347] ">
          Body Mass Index Calculator
        </h1>
        <p className=" text-[#5E6E85] ">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <BMIBox />
    </section>
  );
};

export default Hero;
