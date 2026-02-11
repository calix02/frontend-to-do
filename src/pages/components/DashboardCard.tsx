import { FaTasks } from "react-icons/fa";
type CardProps = {
  title: string;
  color: string;
  value: number;
};
const DashboardCard = ({ title, value, color }: CardProps) => {
  return (
    <div className="w-full h-40 flex justify-center items-center shadow border border-[#e0e0e0] rounded-2xl relative">
      <div
        className={`${color} w-40 h-10 border-design absolute left-2 top-2  flex gap-1 items-center justify-center`}
      >
        <FaTasks />
        <h1 className="poppins-semibold text-lg">{title}</h1>
      </div>
      <span className="poppins-bold text-4xl">{value}</span>
    </div>
  );
};
export default DashboardCard;
