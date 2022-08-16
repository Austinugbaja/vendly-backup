import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { DisplayMobileHeaderContext } from "../../context/DisplayMobileHeaderContext";
import { PageTitleContext } from "../../context/PageTitleContext";
import { ArrowIcon } from "../iconsComponent/Icons";

const PageLinks = ({ accountTabsPageLinks }) => {
  const router = useRouter();
  const { setToggleMobileHeader } = useContext(DisplayMobileHeaderContext);
  const { setPageTitle } = useContext(PageTitleContext);

  // switch routes
  const handleSwitchRoute = (route, routeName) => {
    setToggleMobileHeader(false);
    setPageTitle(routeName);
    router.push(route);
  };

  return (
    <div className="w-auto h-[350px] mt-6">
      <div>
        <div className="shadow-sm bg-white rounded-xl">
          <div className="grid grid-cols-1 divide-y sm:cursor-pointer">
            {accountTabsPageLinks.map((accountTabsPageLink) => (
              <div
                className="flex flex-grow justify-between items-center px-6 py-6"
                key={accountTabsPageLink.id}
                onClick={() =>
                  handleSwitchRoute(
                    accountTabsPageLink.route,
                    accountTabsPageLink.tabName
                  )
                }
              >
                {/* start icon, page link, and icon */}
                <div className="flex items-center">
                  <div>{accountTabsPageLink.icon}</div>
                  <div className="ml-6 text-base font-Poppins font-[500]">
                    {accountTabsPageLink.tabName}
                  </div>
                </div>

                <div>
                  <ArrowIcon width="12" height="15" />
                </div>
                {/* end icon, page link, and icon */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLinks;
