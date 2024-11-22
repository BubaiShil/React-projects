import React from "react";

const StatsCard = ({
  name,
  icon,
  classNam,
  fontsizz,
  subpart,
  iconbgcolor,
  icontxcolor,
  amount,
  userArea,
  height
}) => {
  return (
    <div className="">
      <div
        className={`h-full rounded-3xl overflow-hidden shadow-lg ${classNam} transform hover:scale-105 transition-transform duration-300`}
      >
        <div className="p-6 pb-0 flex justify-between">
          <h2 className="text-xl font-bold text-white">{name}</h2>
          <p
            className={`${icontxcolor} ${iconbgcolor} p-3 rounded-full mt-0  text-lg `}
          >
            {icon}
          </p>
        </div>
        <p className={`text-white p-6 pb-0 pt-1  font-medium ${fontsizz}`}>
          {amount}
        </p>
        <p className="text-[#89B9BD] px-6 pt-4">{subpart}</p>
        <div className="px-4 m-0 w-full">{userArea}</div>
      </div>
    </div>
  );
};

export default StatsCard;
