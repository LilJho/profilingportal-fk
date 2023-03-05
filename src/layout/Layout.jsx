import MainLayout from "../components/layout/MainLayout";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import NavLink from "../components/layout/Sidebar/NavLink";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiProfileLine } from "react-icons/ri";

const Layout = ({ children, isActive }) => {
  return (
    <MainLayout isActive={isActive}>
      <Sidebar title="Profiling Center Portal">
        <NavLink href="/" icon={<BsFillPersonLinesFill />}>
          Buyers
        </NavLink>
        <NavLink href="/logs" icon={<RiProfileLine />}>
          Logs
        </NavLink>
      </Sidebar>
      {children}
    </MainLayout>
  );
};

export default Layout;
