import NavBar from "./NavBar";
import SideBar from "./SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex ">
      <div className="smallLaptop:min-w-[25%] bigLaptop:min-w-[20%]">
        <SideBar />
      </div>
      <div className="smallLaptop:min-w-[75%] bigLaptop:min-w-[80%]">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
