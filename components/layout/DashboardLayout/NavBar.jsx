import Icon from "@atoms/Icons";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between">
        <p>Tuesday, January 31th, 2023</p>
        <div className="flex">
          <Icon className="mr-[45px] pt-1" name="bell" />
          <div className="flex">
            <p className="bg-[#F3FCFB] rounded-full py-1 px-2  mr-2">B</p>
            <p className="pt-1">Bimbo Oni </p>
            <Icon className="mt-2 ml-3" name="angleDown" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
