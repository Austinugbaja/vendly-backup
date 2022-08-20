import React from "react";
import { SearchIcon } from "../../iconsComponent/Icons";

const MobileSearchInput = () => {
  return (
    <div className="px-3 pb-4">
      {/* start search product */}
      {/* NOTE: remove hidden add flex */}
      <div className="relative text-gray-700 flex-grow flex">
        {/* start input field */}
        <input
          className="h-10 pl-[3rem] pr-3 text-[13px] focus:outline-none border-[#03358057] placeholder-gray-600 border rounded-md focus:shadow-outline bg-[#F4F4FF] flex flex-grow"
          type="text"
          placeholder="Search for products"
        />
        {/* end input field */}

        {/* search icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-6 pr-3 pointer-events-none">
          <SearchIcon color="#000000" width="15" height="15" />
        </div>
      </div>
      {/* end search product */}
    </div>
  );
};

export default MobileSearchInput;
