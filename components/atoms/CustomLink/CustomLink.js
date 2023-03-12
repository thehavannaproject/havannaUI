import Link from "next/link";

const CustomLink = ({ children, hover, destination, customClass }) => {
  return (
    <div>
      <Link href={destination}>
        <div className={`cursor-pointer hover:text-${hover} ${customClass}`}>{children}</div>
      </Link>
    </div>
  );
};

export default CustomLink;
