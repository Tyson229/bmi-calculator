const layoutStyle =
  "text-white grid rounded-2xl bg-gradient-to-r from-[#345FF6] to-[#587DFF] p-8   md:rounded-r-[3.5rem]  md:grid-cols-2 md:items-center";

const Results = ({ result }: { result: number | undefined }) => {
  return result ? (
    <div className={`${layoutStyle} gap-6`}>
      <div className="grid gap-2">
        <p className="font-bold">Your BMI is...</p>
        <p className="text-5xl font-semibold">{result}</p>
      </div>
      <div className="text-sm">
        Your BMI suggests you're . Your ideal weight is between
        <span className="font-bold"></span>
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
