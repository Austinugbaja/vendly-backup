import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TabListContext } from "../../../context/TabLinksContext";
import { NotificationIcon, SearchIcon } from "../../iconsComponent/Icons";
import ProfileStatusInfo from "../profileStatusInfo/ProfileStatusInfo";
import Link from "next/link";
import { DisplayMobileHeaderContext } from "../../../context/DisplayMobileHeaderContext";
import { UserContext } from "../../../context/UserContext";
import MobileSearchInput from "../mobileSearchInput/mobileSearchInput";
import { DisplayMobileProfileContext } from "../../../context/DisplayMobileProfileContext";

const MobileHeader = () => {
  const { tabIndex, dispatch } = useContext(TabListContext);
  const { mobileHeader } = useContext(DisplayMobileHeaderContext);
  const router = useRouter();
  const { userProfile } = useContext(UserContext);
  const { displayMobileProfile, setDisplayMobileProfile } = useContext(
    DisplayMobileProfileContext
  );

  const switchTabs = (id) => {
    if (id === 0) {
      router.push("/product");
      dispatch({
        type: "SWITCH_PRODUCTS",
        tabLinksId: id,
      });
    } else if (id === 1) {
      router.push("/accounts");
      dispatch({
        type: "SWITCH_ACCOUNTS",
        tabLinksId: id,
      });
    } else {
      router.push("/insights");
      dispatch({
        type: "SWITCH_INSIGHTS",
        tabLinksId: id,
      });
    }
  };

  return (
    <div
      className={`
        fixed 
        z-20 pb-3
        w-full 
        bg-backgroundLight
        top-0 
        ${!mobileHeader ? "hidden" : "block"}`}
    >
      {/* start navbar */}
      <div className="flex w-full justify-between items-center px-3 h-14">
        {/* start hamburger menu icon */}
        <div>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        {/* end hamburger menu icon */}

        {/* start notification icon  */}
        {/* <div>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                </div> */}
        {/* end notification icon  */}
      </div>
      {/* end navbar */}

      {/* start profile info */}
      <div>
        {displayMobileProfile ? (
          <ProfileStatusInfo
            fullName={userProfile.fullName}
            profilePic={userProfile.profilePic}
          />
        ) : (
          //  start search product
          <MobileSearchInput />
          //  end search product
        )}
      </div>
      {/* end profile info */}

      {/* start tab links */}
      <div className="px-3">
        <div className="grid grid-cols-2 text-center bg-[#ECF2FC] h-[50px] font-Poppins font-[500] ">
          {/* products */}

          <div
            className={`
                    min-h-[40px] 
                    flex 
                    items-center 
                    justify-center
                    ${
                      tabIndex === 0
                        ? "bg-[#033580] text-white rounded-lg"
                        : "bg-transparent"
                    }
                    `}
            onClick={() => switchTabs(0)}
          >
            PRODUCTS
          </div>

          {/* accounts */}
          <div
            className={`
                    min-h-[40px] 
                    flex 
                    items-center 
                    justify-center
                    ${
                      tabIndex === 1
                        ? "bg-[#033580] text-white rounded-lg"
                        : "bg-transparent"
                    }
                    `}
            onClick={() => switchTabs(1)}
          >
            ACCOUNTS
          </div>

          {/* insights */}
          {/* <div 
                    className={`
                    min-h-[40px] 
                    flex 
                    items-center 
                    justify-center
                    ${ tabIndex === 2 ? 'bg-[#033580] text-white rounded-lg' : 'bg-transparent'}
                    `} 
                    onClick={() => switchTabs(2)}>INSIGHTS</div> */}
        </div>
      </div>
      {/* end tab links */}
    </div>
  );
};

export default MobileHeader;
