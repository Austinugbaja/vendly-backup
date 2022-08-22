import { useContext } from "react";
import NotificationBarContextProvider, {
  NotificationBarContext,
} from "../../context/NotificationBarContext";
import DesktopHeader from "../profile/header/DesktopHeader";
import DesktopSideBar from "../profile/sidebar/DesktopSidebar";
import NotificationSideBar from "../profile/sidebar/NotificationSidebar";
import styles from "../../styles/NotificationSidebar.module.css";
import MobileHeader from "../profile/header/MobileHeader";
import DisplaySearchContextProvider from "../../context/DisplaySearchContext";
import TabLinkContextProvider from "../../context/TabLinksContext";
import DisplayMobileHeaderProvider from "../../context/DisplayMobileHeaderContext";
import PageTitleContextProvider from "../../context/PageTitleContext";
import UserContextProvider from "../../context/UserContext";

const MainLayout = ({ children }) => {
  const { toggle } = useContext(NotificationBarContext);

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
          <div className="p-4">{children}</div>
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
          <DisplaySearchContextProvider>
            <NotificationBarContextProvider>
              <TabLinkContextProvider>
                <MainLayout>{page}</MainLayout>
              </TabLinkContextProvider>
            </NotificationBarContextProvider>
          </DisplaySearchContextProvider>
        </DisplayMobileHeaderProvider>
      </PageTitleContextProvider>
    </UserContextProvider>
  );
};
export default MainLayout;
