import { useContext, useState } from "react";
import DesktopSideBar from "../components/profile/sidebar/DesktopSidebar";
import { TabListContext } from "../context/TabLinksContext";
import styles from "../styles/NotificationSidebar.module.css";
import Product from "../components/profile/productCard/Product";
import NotificationSideBar from "../components/profile/sidebar/NotificationSidebar";
import {
  NotificationIcon,
  SearchIcon,
} from "../components/iconsComponent/Icons";
import Account from "../components/profile/account/Account";

const Profile = () => {
  const { tabIndex } = useContext(TabListContext);
  const [notificationBar, setNotificationBar] = useState(false);

  // toggling the notification sidebar open
  const openNotificationSidebar = () => {
    setNotificationBar(true);
  };

  // toggling the notification sidebar open
  const closeNotificationSidebar = () => {
    setNotificationBar(false);
  };

  return (
    <main className="relative">
      {/* side bar - left view start */}
      <section
        // style={{boxShadow: '50px 10px #888888'}}
        className="fixed left-0 w-[280px] h-full shadow-lg bg-white"
      >
        <DesktopSideBar />
      </section>
      {/* side bar - end */}

      {/* main view - middle view start */}
      <section
        className={`
            relative 
            bg-white
            h-full 
            ${notificationBar ? "mx-[280px]" : "ml-[285px]"}
            ${styles.profile_main}
            `}
      >
        {/* start header */}
        <header className="bg-white py-6 sticky top-0 z-10 px-6">
          {/* start search bar and create product button */}
          <div className="flex justify-between items-center font-Poppins">
            {/* start search product */}
            <div className="relative text-gray-700 flex flex-grow">
              {/* start input field */}
              <input
                className="h-10 pl-[3rem] pr-3 text-[13px] placeholder-gray-600 border rounded-md focus:shadow-outline bg-[#F4F4FF] flex flex-grow"
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
              <button className="h-10 font-[500] px-5 m-2 text-indigo-100 bg-primary rounded-md text-[13px] flex justify-center w-[15rem] items-center">
                CREATE PRODUCT
              </button>
            </div>
            {/* end create product button */}

            {/* start Notification icon */}
            <div
              onClick={openNotificationSidebar}
              className={`
                        flex 
                        ${notificationBar ? "hidden" : "flex"}`}
            >
              <button className="inline-flex items-center h-10 px-2 bg-[#F4F4FF] rounded-lg focus:shadow-outline">
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
                    text-[20px]
                    font-[600]
                    mt-8"
          >
            Products
          </h1>
          {/* end products tag name */}
        </header>
        {/* end header */}

        {/* start products tab view */}
        <div className="pl-3 mt-3">
          {tabIndex === 0 && (
            <div
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
              }}
              className="grid gap-y-4"
            >
              {[1, 2, 3, 4, 6, 7, 8, 9].map((product) => (
                <Product key={product} />
              ))}
            </div>
          )}
        </div>
        {/* end products tab view */}

        {/* start accounts tab view */}
        {tabIndex === 1 && (
          <div>
            <Account />
          </div>
        )}
        {/* end accounts tab view */}

        {/* start insights tab view */}
        {tabIndex === 2 && <div>insights</div>}
        {/* end insights tab view */}
      </section>
      {/* main view - middle view end */}

      {/* notification view - left view start */}
      <section
        className={`${styles.sidebar} ${styles.scroll} ${
          notificationBar ? "w-[280px] transition-all" : "w-0"
        } box-content`}
      >
        <NotificationSideBar
          closeNotificationSidebar={closeNotificationSidebar}
        />
      </section>
      {/* notification view - left view end */}
    </main>
  );
};

export default Profile;
