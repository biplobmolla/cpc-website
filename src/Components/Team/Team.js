import React from "react";
import { useState } from "react";

const Team = ({ team = [] }) => {
  const [teamImgLink, setTeamImgLink] = useState();
  const [teamPagination, setTeamPagination] = useState([]);
  return (
    <div className="mt-5 mb-10 p-5">
      <div className="w-11/12 lg:w-4/5 mx-auto rounded-md">
        <img
          src="https://iili.io/JdaHhFV.jpg"
          alt=""
          className="w-full rounded-md shadow-sm"
        />
      </div>
      <div className="w-3/5 lg:w-2/5 mt-5 mx-auto flex justify-around items-center text-[#939393]">
        <button className="text-xl lg:text-2xl 2xl:text-2xl hover:text-orange-500">
          {"<"}
        </button>
        <button className="text-lg lg:text-xl 2xl:text-2xl hover:text-orange-500 uppercase underline decoration-orange-500 underline-offset-2">
          <span className="hidden lg:inline">Team </span>2022
        </button>
        <button className="text-xl lg:text-2xl 2xl:text-2xl hover:text-orange-500">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Team;
