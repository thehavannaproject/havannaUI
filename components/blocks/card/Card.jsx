import Icon from "@atoms/Icons"

const Card = ({icon, iconClass,  title, description, customClass }) => {
  return (
    <div className={ `font-mullish tablet:h-[412px]  bg-white rounded-3xl ${customClass}`}>
      <div className={iconClass}>
         <Icon name={icon}/>
      </div>
      <div>
        <h1 className="font-bold tablet:mt-12">{title}</h1>
        <p className="mt-3 font-medium">{description}</p>
      </div>
    </div>
  );
};

export default Card;
