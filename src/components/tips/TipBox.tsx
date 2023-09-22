import { CardInterface } from "../../lib/data";

const TipBox = ({ img, title, description }: CardInterface) => {
  return (
    <div className="grid w-full gap-8 md:flex lg:grid">
      <img src={img} alt={title} />
      <div className="grid gap-6">
        <div className="text-2xl text-[#253347]">{title}</div>
        <div className="text-[#5E6E85]">{description}</div>
      </div>
    </div>
  );
};

export default TipBox;
