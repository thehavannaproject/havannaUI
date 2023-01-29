import Icon from "@atoms/Icons";

const NavBar = () => {
  var today = new Date();
  var dd = String(today.getDate());
  return (
    <>
      <div className="flex justify-between pl-6 pr-[36px] py-5 border">
        <p className="flex justify-center text-16 items-center text-HavannaGreen-300 font-bold">Tuesday, January 31th, 2023 {dd}</p>
        <div className="flex">
          <Icon className="mr-[45px] pt-3" name="bell" />
          <div className="flex">
            <Icon name="user" />
            <p className="pt-3 ml-2">Bimbo Oni </p>
            <Icon className="mt-5 ml-3 " name="angleDown" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
