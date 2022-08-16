import Image from "next/image";
import { ProductIcon, MetricIcon } from "../../iconsComponent/Icons";
const ProfileStatusInfo = ({ fullName, profilePic }) => {
  return (
    <div className="sm:border-b-[1px] sm:border-[#DEDEDE] pb-6 h-[13em] text-center flex flex-col justify-center items-center space-y-3">
      {/* <div></div> */}
      {/* start user profile image */}
      <img
        className="inline object-cover w-[100px] h-[100px] mr-2 rounded-full"
        src={profilePic}
        alt="Profile image"
      />
      {/* end user profile image */}

      {/* start user profile name */}
      <h1 className="text-[20px] text-secondary font-[600]">{fullName}</h1>
      {/* end user profile name */}

      {/* start product and sales  metrics */}
      <div className="flex justify-between">
        {/* start product metrics */}
        <div className="flex items-center mr-3">
          {/* start product icon */}
          <div>
            <ProductIcon width="w-[1rem]" height="h-[1rem]" color="#0055D4" />
          </div>
          {/* end product icon */}

          {/* start product metrics value */}
          <div className="ml-1 text-tetiary font-[400]">20</div>
          {/* end product metrics value */}
        </div>
        {/* end product  metrics*/}

        {/* start sales metrics */}
        <div className="flex items-center">
          {/* start sales icon */}
          <div>
            <svg
              className="w-5 h-5 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          {/* end sales icon */}

          {/* start sales metrics value */}
          <div className="ml-1 text-tetiary font-[400]">20</div>
          {/* end sales metrics value */}
        </div>
        {/* end sales  metrics*/}
      </div>
      {/* end product and sales  metrics */}
    </div>
  );
};

export default ProfileStatusInfo;
