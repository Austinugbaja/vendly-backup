import { useContext, useEffect, useState } from "react";
import { NotificationBarContext } from "../../../context/NotificationBarContext";
import { PageTitleContext } from "../../../context/PageTitleContext";
import { TabListContext } from "../../../context/TabLinksContext";
import Link from "next/link";
import { NotificationIcon, SearchIcon } from "../../iconsComponent/Icons";

const DesktopHeader = () => {
  const { toggle, dispatch } = useContext(NotificationBarContext);
  const { tabIndex } = useContext(TabListContext);
  const [tabPageTitle, setTabPageTitle] = useState();
  const { pageTitle } = useContext(PageTitleContext);
  const [show, setShow] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  // toggling the notification sidebar open
  const openNotificationSidebar = () => {
    dispatch({
      type: "OPEN_NOTIFICATION",
    });
  };

  // changing the page title of the pages
  useEffect(() => {
    if (tabIndex === 0) {
      setTabPageTitle("Product");
    } else if (tabIndex === 1) {
      setTabPageTitle("Accounts");
    } else {
      setTabPageTitle("Insights");
    }
    console.log(tabIndex, "the tab index has changes");
  }, [tabIndex]);

  // Show  Searchbar only on scroll up
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // Function to Show  Searchbar only on scroll up
  const handleScroll = () => {
    const position = document.body.getBoundingClientRect().top;
    setScrollPos(position);
    setShow(position > scrollPos);
  };

  return (
    <header
      className={`bg-backgroundLight py-5 sticky top-0 z-10 px-6 ${
        show ? "space-y-10" : "space-y-0"
      }`}
    >
      {/* start search bar and create product button */}
      <div
        className={`${
          show ? "flex" : "hidden"
        } space-x-5 justify-between items-center font-Poppins `}
      >
        {/* start search product */}
        {/* NOTE: remove hidden add flex */}
        <div className="relative text-gray-700 flex-grow flex">
          {/* start input field */}
          <input
            className="h-10 pl-[3rem] pr-3 text-[13px] border-[#03358057] placeholder-gray-600 border rounded-md focus:shadow-outline bg-[#F4F4FF] flex flex-grow"
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

        {/* start create product button */}
        <div>
          <Link href="/createproduct">
            <button className="h-10 font-[500] px-5 text-indigo-100 bg-primary rounded-md text-[13px] flex justify-center w-[15rem] items-center">
              CREATE PRODUCT
            </button>
          </Link>
        </div>
        {/* end create product button */}

        {/* start Notification icon */}
        <div
          onClick={openNotificationSidebar}
          className={`
                flex 
                ${toggle ? "hidden" : "flex"}`}
        >
          <button className="inline-flex items-center h-10 px-2 border border-[#03358057] bg-[#F4F4FF] rounded-lg focus:shadow-outline">
            <span className="inline-flex relative">
              <NotificationIcon color="#323232" width="15" height="15" />
              <span className="absolute -top-1 -right-1 bg-[#FF5C00] rounded-full h-2 w-2"></span>
            </span>
            <span className="ml-3 font-Raleway text-secondary font-[700] text-base">
              Open
            </span>
          </button>
        </div>
        {/* end Notification icon */}
      </div>
      {/* end search bar and create product button */}

      {/* start products tag name */}
      <h1
        className="
            text-secondary 
            font-Raleway 
            font-semibold
            text-2xl
            uppercase
            "
      >
        {pageTitle}
      </h1>
      {/* end products tag name */}
    </header>
  );
};

export default DesktopHeader;
