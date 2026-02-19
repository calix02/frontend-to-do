// Assets
import AppLogo from "@/assets/app-logo.svg";
type ModalProp = {
  logout: () => void;
  cancel: () => void;
};
function LogoutModal({ logout, cancel }: ModalProp) {
  return (
    <div className="bg-[#0000006e] fade-in inset-0 flex justify-center fixed  z-30 items-center">
      <div className="w-70 h-50 rounded-md shadow-md bg-white flex flex-col justify-center relative items-center">
        <img
          src={AppLogo}
          className="w-30 absolute top-1/3 opacity-80 -translate-y-1/2"
          alt="App Logo"
        />
        <h1 className="playfair-bold text-3xl z-10 mt-13">App To Do</h1>
        <p className="poppins-regular mt-3 text-sm">Do you want to log out?</p>
        <div className="w-full flex gap-3 px-3 text-sm mt-2">
          <button
            onClick={logout}
            className="w-full h-9 rounded-md bg-[#A5491B] text-white poppins-semibold"
          >
            Yes
          </button>
          <button
            onClick={cancel}
            className="w-full h-9 rounded-md border bg-white poppins-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default LogoutModal;
