import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const MenuHeader = ({ children, title, onClose }) => {
  return (
    <div className="font-mulish">
      <div className="sticky w-full top-0 z-50 bg-white border-b">
        <div className="flex justify-between text-center px-6 py-6 shadow-sm">
          <ChevronLeftIcon className="text-[#3B3F42]" onClick={onClose} width={24} />
          <p className="text-16 font-bold text-[#3B3F42]">{title}</p>
          <p />
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default MenuHeader;
