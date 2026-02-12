// Assets
import AppLogo from "@/assets/app-logo.svg";
function AuthenticatedModal() {
  return (
    <div className="bg-[#0000006e] fade-in inset-0 flex justify-center fixed  z-30 items-center">
      <div className="w-70 h-50 rounded-md shadow-md bg-white flex flex-col justify-center relative items-center">
        <img
          src={AppLogo}
          className="w-30 absolute top-1/3 opacity-80 -translate-y-1/2"
          alt="App Logo"
        />
        <h1 className="playfair-bold text-3xl z-10 mt-13">App To Do</h1>
        <p className="poppins-regular text-sm mt-3">Please wait...</p>
        <div className="w-7 animate-spin mt-1 h-7 rounded-full border-t-[#A5491B] border-gray-500 border-3 "></div>
      </div>
    </div>
  );
}
export default AuthenticatedModal;
