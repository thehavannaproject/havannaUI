import Link from "next/link";

const CustomLink = ({ children, hover, destination, customClass }) => {
  return (
    <Link href={destination} passHref>
      <div className={`cursor-pointer hover:text-${hover} ${customClass}`}>{children}</div>
    </Link>
  );
};

export default CustomLink;
