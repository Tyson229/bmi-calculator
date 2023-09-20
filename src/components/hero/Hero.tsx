import BMIBox from "./bmi-box/BMIBox";

const Hero = () => {
  return (
    <section className="grid w-full place-items-center gap-8 px-6 pt-8 font-sans">
      <div className="from-white absolute top-0 z-0 block h-4/5 w-full rounded-b-[35px] bg-gradient-to-br to-[#D6E6FE]"></div>
      <img src="src/assets/logo.svg" className="z-10 " />
      <h1 className="z-10 text-center text-6xl font-bold text-[#253347]">
        Body Mass Index Calculator
      </h1>
      <p className="items-justify z-10 text-center text-[#5E6E85]">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
      <BMIBox />
    </section>
  );
};

export default Hero;
