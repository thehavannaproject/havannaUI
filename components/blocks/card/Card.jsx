import Icon from "@atoms/Icons";

const Card = ({ icon, iconClass, title, description, customClass }) => {
  return (
    <div className={`font-mullish tablet:w-[352px] tablet:h-[440px] px-10 py-[48px]  bg-white rounded-3xl ${customClass}`}>
      <div className={iconClass}>
        <Icon name={icon} />
      </div>
      <div>
        <h1 className="font-bold tablet:mt-12 text-[22px]">{title}</h1>
        <p className="mt-3 font-medium pb-3">{description}</p>
      </div>
    </div>
  );
};

export default Card;
