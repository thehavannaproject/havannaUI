import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const MenuHeader = ({ children, title, onClose }) => {
  return (
    <div className="font-mulish">
      <div className="fixed w-full left-0 h-full top-0 z-50 bg-white text-black border-b">
        <div className="flex justify-between text-center px-6 py-6 shadow-sm">
          <ChevronLeftIcon className="text-[#3B3F42] cursor-pointer" onClick={onClose} width={24} />
          <p className="text-16 font-bold text-[#3B3F42]">{title}</p>
          <p />
        </div>
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default MenuHeader;
