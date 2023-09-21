const YourResult = () => {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:relative items-center">
      <img src="/src/assets/image-man-eating.webp" className="md:relative md:-translate-x-12"/>
      <div className="grid gap-8 p-6">
        <div className="text-[32px] font-semibold text-[#253347]">
          What your BMI result means
        </div>
        <p className="text-[#5E6E85]">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  );
};

export default YourResult;
