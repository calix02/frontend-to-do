// Libraries
import { useState } from "react";

// Components
import DashboardCard from "./components/DashboardCard";
import Header from "./components/Header";

function Dashboard() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="w-screen h-screen  bg-white">
      <Header toggle={handleMenu} showMenu={showMenu} />
      <div className="mt-25 w-full pt-8 px-5">
        <h1 className="poppins-semibold fade-left text-xl text-[#242423]">
          Welcome Mark Alvarado!
        </h1>
        <div className="mt-5 fade-in flex flex-col items-center gap-3">
          <DashboardCard
            color="bg-[#FF813D40]"
            title="Total Tasks"
            value={11}
          />
          <DashboardCard color="bg-[#3DC64540]" title="Completed" value={8} />
          <DashboardCard color="bg-[#D2E35240]" title="In Progress" value={6} />
          <DashboardCard
            color="bg-[#E3525240]"
            title="Not Started"
            value={20}
          />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
