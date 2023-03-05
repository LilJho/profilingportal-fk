import React from "react";
import NotificationModal from "../Notification/NotificationModal";
import useToggle from "../../hooks/useToggle";
import UnstyledButton from "./UnstyledButton";
import { RiNotification3Line } from "react-icons/ri";

export default function NotificationButton({ badge }) {
  const [show, toggle] = useToggle();
  return (
    <>
      <UnstyledButton
        className="relative hover:scale-105 transition-all duration-150"
        onClick={toggle}
      >
        <RiNotification3Line className="w-6 h-6" />
        <div className="bg-red-500 animate-pulse transition-all duration-700 rounded-full text-[8px] flex items-center justify-center absolute top-1.5 right-1.5 w-3.5 h-3.5 text-white">
          {badge}
        </div>
      </UnstyledButton>
      {show ? <NotificationModal /> : ""}
    </>
  );
}
