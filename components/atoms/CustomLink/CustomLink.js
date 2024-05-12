import Link from "next/link";

const CustomLink = ({ children, hover, destination, customClass, target }) => {
  return (
    <div>
      <Link href={destination} passHref>
        <a target={target}>

        <div className={`cursor-pointer hover:text-${hover} ${customClass}`}>{children}</div>
        </a>
      </Link>
    </div>
  );
};

export default CustomLink;
