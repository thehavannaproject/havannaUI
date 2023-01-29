import MiddlePage from "./MiddlePage";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-screen">
        <NavBar />
        <MiddlePage />

      </div>

    </div>
  );
};

export default DashboardLayout;
