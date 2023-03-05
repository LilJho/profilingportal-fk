import Image from "next/image";
import Logo from "../../images/logo.png";
import DisplayTimeDate from "../Sidebar/DiplayTimeDate";

const Sidebar = ({ title, children }) => {
  return (
    <div className="flex flex-col w-[14.75rem] bg-white fixed top-0 bottom-0 left-0 shadow-xl border-r">
      <div className="p-6 flex flex-col justify-center items-center gap-6 mt-10">
        <Image src={Logo} alt="FarmKonek Logo" className="w-24" priority />
        <ul className="w-full flex flex-col gap-2">{children}</ul>
      </div>
      <DisplayTimeDate title={title} />
    </div>
  );
};

export default Sidebar;
