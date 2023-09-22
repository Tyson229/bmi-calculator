const LimitationDescription = ({style} : {style:string}) => {
  return (
    <div className={`grid gap-8 ${style}`}>
      <div className="text-4xl font-semibold text-[#253347]">
        Limitations of BMI
      </div>
      <div className="text-[#5E6E85]">
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
      </div>
    </div>
  );
}

export default LimitationDescription