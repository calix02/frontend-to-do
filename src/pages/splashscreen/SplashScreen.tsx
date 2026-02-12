// Assets
import AppLogo from "@/assets/app-logo.svg";

function SplashScreen() {
  return (
    <div className="w-screen h-screen relative bg-linear-to-br from-[#FFFFFF] to-[#FFE7B4] flex  justify-center items-center">
      <img
        src={AppLogo}
        className="w-75 fade-out  absolute top-1/3 -translate-y-1/2"
        alt="App Logo"
      />
      <div className="flex flex-col">
        <div className="w-screen text-center z-10 fade-in">
          <h1 className="text-4xl playfair-regular">Welcome</h1>
          <h1 className="text-6xl font-bold playfair-bold">To Do App</h1>
        </div>
        <div className="w-screen flex justify-center mt-5">
          <div className="w-10 h-10 rounded-full border-5 border-gray-400 border-t-[#A5491B] animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
export default SplashScreen;
