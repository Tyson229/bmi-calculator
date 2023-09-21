import { CardInterface } from "../../lib/data";

const LimitationCard = ({ img, title, description }: CardInterface) => {
  return (
    <div className="grid gap-4 drop-shadow-[16px_32px_56px_rgb(143,174,207,25%)] bg-white p-6 rounded-2xl">
      <div className="flex gap-4">
        <img src={img} alt={title} />
        <div className="text-xl text-[#253347] font-semibold">{title}</div>
      </div>
      <div className="text-[#5E6E85]">{description}</div>
    </div>
  );
};

export default LimitationCard;
