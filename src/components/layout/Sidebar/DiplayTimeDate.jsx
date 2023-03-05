import { useEffect, useState } from "react";
import dayjs from "dayjs";
import FarmingIllustration from "../../images/farmingIllustration.png";
import Image from "next/image";

const DiplayTimeDate = ({ title }) => {
  const [dateTime, setDateTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime({
        time: dayjs().format("h:mm A"),
        date: dayjs().format("MMM DD"),
      });
    }, 1000); // Update the time every 1000 milliseconds (1 second)

    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, []);

  return (
    <div className="px-5 py-4 border-t mt-auto">
      <h6 className="font-medium text-[18px] ">{title}</h6>
      <div className="flex gap-3.5 justify-between items-center">
        <div className="w-full">
          <div className="text-sm -mb-1">{dateTime?.date}</div>
          <h6 className="text-xl font-medium">{dateTime?.time}</h6>
        </div>
        <div className="w-full h-full relative">
          <Image src={FarmingIllustration} alt="FarmingIllustration" />
        </div>
      </div>
    </div>
  );
};

export default DiplayTimeDate;
