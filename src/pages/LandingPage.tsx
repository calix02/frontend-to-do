import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../animation.css";
import AppLogo from "../assets/app-logo.svg";
import SplashScreen from "./SplashScreen";
function LandingPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  const navigateToLanding = (): void => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="w-screen h-screen bg-linear-to-br from-[#FFFFFF] to-[#FFE7B4] flex justify-center items-center relative">
      <img
        src={AppLogo}
        className="w-75 fade-down absolute top-1/4 -translate-y-1/2"
        alt="App Logo"
      />
      <div className="flex flex-col ">
        <div className="w-screen fade-In text-center fade-in z-10">
          <h1 className="text-4xl playfair-regular">Welcome</h1>
          <h1 className="text-6xl font-bold playfair-bold">To Do App</h1>
        </div>
        <p className="text-center fade-In mt-5 fade-in poppins-regular text-sm px-10">
          Create, track, and complete tasks anytime—your productivity,
          simplified.
        </p>
        <div className="w-screen px-10">
          <button
            onClick={navigateToLanding}
            className="poppins-semibold fade-up text-sm mt-20 w-full h-12 rounded-lg shadow-md text-white bg-[#A5491B]"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
