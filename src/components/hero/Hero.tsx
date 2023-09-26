import Background from "./Background";
import BMIBox from "./bmi-box/BMIBox";
import Logo from '../../assets/logo.svg'

const Hero = () => {
  return (
    <section className="relative flex w-full max-w-screen-xl flex-col gap-y-10 pt-12 lg:h-[70vh]">
      <Background />
      <div className="z-10 grid place-items-center lg:place-items-start lg:px-10">
        <img src={Logo} />
      </div>
      <div className="grid h-full  place-items-start gap-8 px-10 lg:grid-cols-2">
        <div className="z-10 flex w-full flex-col gap-6 text-center lg:mt-12 lg:text-start">
          <h1 className="text-6xl font-bold text-[#253347]">
            Body Mass <br /> Index Calculator
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
