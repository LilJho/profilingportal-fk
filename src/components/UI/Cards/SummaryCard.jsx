import React from "react";

const SummaryCard = ({ value = "0", label = "Summary Label", color }) => {
  const split_label = label.split(" ");
  return (
    <div className="flex gap-6 items-center py-12 px-14 border max-w-max rounded-2xl flex-col lg:flex-row overflow-hidden grow bg-white">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl lg:text-5xl text-center font-bold">{value}</h2>
        <p className="uppercase text-[.8rem] lg:text-lg  flex flex-col  leading-5">
          <span>{split_label[0]}</span>
          <span>{split_label[1]}</span>
        </p>
      </div>
      <div className="flex gap-4 items-end ">
        <div
          className={`w-[5px] h-[32px] ${CardColor(color)[0]} rounded-md `}
        ></div>
        <div
          className={`w-[5px] h-[58px] ${CardColor(color)[1]} rounded-md`}
        ></div>
        <div
          className={`w-[5px] h-[44px] ${CardColor(color)[2]} rounded-md`}
        ></div>
        <div
          className={`w-[5px] h-[70px] ${CardColor(color)[3]} rounded-md`}
        ></div>
      </div>
    </div>
  );
};

export default SummaryCard;

const CardColor = (size = "default") =>
  ({
    default: [
      "bg-primary-500",
      "bg-primary-400",
      "bg-primary-600",
      "bg-primary-700",
    ],
    yellow: [
      "bg-tertiary-500",
      "bg-tertiary-400",
      "bg-tertiary-600",
      "bg-tertiary-700",
    ],
    red: ["bg-red-500", "bg-red-400", "bg-red-600", "bg-red-700"],
  }[size]);
