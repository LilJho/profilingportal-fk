import { useRouter } from "next/router";
import Link from "next/link";

const NavLink = ({ href = "", children, icon }) => {
  const router = useRouter();
  const baseRouter = href.split("/")[1];
  const currentURL = router.pathname.split("/")[1];
  const isActive = router.asPath === href || currentURL === baseRouter;

  return (
    <Link href={href}>
      <li
        className={`flex items-center gap-3 h-[2.875rem] w-full rounded-xl cursor-pointer text-left px-5 ${
          isActive
            ? "bg-primary-500 text-white hover:bg-primary-600"
            : "bg-[#F0F2F5] text-neutral-500 hover:text-primary-500"
        }`}
      >
        <span
          className={`[&>*]:w-5 [&>*]:h-5 ${
            isActive ? "[&>*]:text-white" : "[&>*]:text-inherit"
          }`}
        >
          {icon}
        </span>

        <span>{children}</span>
      </li>
    </Link>
  );
};

export default NavLink;
