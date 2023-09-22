import { CardInterface } from "../../lib/data";

const LimitationCard = ({ img, title, description, style }: CardInterface) => {
  return (
    <div
      className={`grid h-full w-full content-start gap-4 rounded-2xl bg-white p-6 drop-shadow-[16px_32px_56px_rgb(143,174,207,25%)] md:col-span-2 md:p-8 lg:col-span-4 ${style}`}
    >
      <div className="flex h-fit items-center gap-x-4">
        <img src={img} alt={title} />
        <div className="text-xl font-semibold text-[#253347]">{title}</div>
      </div>
      <div className="h-full text-[#5E6E85]">{description}</div>
    </div>
  );
};

export default LimitationCard;
