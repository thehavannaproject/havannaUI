import NavBar from "./NavBar";
import SideBar from "./SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex ">
      <div className="min-w-[20%]">
        <SideBar />
      </div>
      <div className="min-w-[80%]">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
