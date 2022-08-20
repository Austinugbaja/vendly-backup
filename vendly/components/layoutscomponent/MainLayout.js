import { useContext, useState, useEffect } from "react";
import NotificationBarContextProvider, {
  NotificationBarContext,
} from "../../context/NotificationBarContext";
import DesktopHeader from "../profile/header/DesktopHeader";
import DesktopSideBar from "../profile/sidebar/DesktopSidebar";
import NotificationSideBar from "../profile/sidebar/NotificationSidebar";
import styles from "../../styles/NotificationSidebar.module.css";
import MobileHeader from "../profile/header/MobileHeader";
import TabLinkContextProvider from "../../context/TabLinksContext";
import DisplayMobileHeaderProvider from "../../context/DisplayMobileHeaderContext";
import PageTitleContextProvider from "../../context/PageTitleContext";
import UserContextProvider from "../../context/UserContext";
import DisplayMobileProfileProvider from "../../context/DisplayMobileProfileContext";

const MainLayout = ({ children }) => {
  const { toggle } = useContext(NotificationBarContext);
  // const [displaySearch, setDisplaySearchInput] = useState(false);

  // useEffect(() => {
  //   ["load", "scroll", "resize"].forEach((e) =>
  //     window.addEventListener(e, handleScroll)
  //   );
  //   return () =>
  //     ["load", "scroll", "resize"].forEach((e) =>
  //       window.removeEventListener(e, handleScroll)
  //     );
  //   // eslint-disable-next-line
  // }, []);

  // function handleScroll() {
  //   if (window.scrollY > 2) {
  //     setDisplaySearchInput(true);
  //   } else {
  //     setDisplaySearchInput(false);
  //   }
  // }

  return (
    <>
      {/* start Desktop Layout */}
      <div className="relative hidden sm:block bg-backgroundLight">
        {/* start desktop sidebar */}
        <DesktopSideBar />
        {/* end desktop sidebar */}

        {/* starts header and children */}
        <section
          className={`
            relative 
            bg-backgroundLight
            h-full min-h-screen pb-20
            ${toggle ? "mx-[280px]" : "ml-[281px]"}
            ${styles.profile_main}
            `}
        >
          {/* start header */}
          <DesktopHeader />
          {/* end header */}

          {/* start children */}
          {children}
          {/* end children */}
        </section>
        {/* ends header and children */}

        {/* start notification sidebar */}
        <NotificationSideBar />
        {/* end notification sidebar */}
      </div>
      {/* end Desktop layout */}

      {/* start mobile layout */}
      <div
        className="block sm:hidden w-full relative 
            bg-backgroundLight
      "
      >
        <MobileHeader />
        {children}
      </div>
      {/* end mobile layout */}
    </>
  );
};

export const getLayout = (page) => {
  return (
    <UserContextProvider>
      <PageTitleContextProvider>
        <DisplayMobileHeaderProvider>
          <NotificationBarContextProvider>
            <TabLinkContextProvider>
              <DisplayMobileProfileProvider>
                <MainLayout>{page}</MainLayout>
              </DisplayMobileProfileProvider>
            </TabLinkContextProvider>
          </NotificationBarContextProvider>
        </DisplayMobileHeaderProvider>
      </PageTitleContextProvider>
    </UserContextProvider>
  );
};
export default MainLayout;
