import { useRouter } from "next/router";
import { useContext } from "react";
import { PageTitleContext } from "../../../context/PageTitleContext";
import { TabListContext } from "../../../context/TabLinksContext";
import { UserContext } from "../../../context/UserContext";
import {
  ProductIcon,
  AccountIcon,
  InsightIcon,
  HelpIcon,
  FeedBackIcon,
} from "../../iconsComponent/Icons";
import ProfileStatusInfo from "../profileStatusInfo/ProfileStatusInfo";

const DesktopSideBar = () => {
  const { tabIndex, dispatch } = useContext(TabListContext);
  const { setPageTitle } = useContext(PageTitleContext);
  const { userProfile } = useContext(UserContext);
  const router = useRouter();

  // switching the product, account and insight tabs
  const switchTabs = (id) => {
    if (id === 0) {
      router.push("/product");
      setPageTitle("Products");
      dispatch({
        type: "SWITCH_PRODUCTS",
        tabLinksId: id,
      });
    } else if (id === 1) {
      router.push("/accounts");
      setPageTitle("Accounts");

      dispatch({
        type: "SWITCH_ACCOUNTS",
        tabLinksId: id,
      });
    } else if (id === 2) {
      router.push("/insights");
      dispatch({
        type: "SWITCH_INSIGHTS",
        tabLinksId: id,
      });
    } else {
      router.push("/createproduct");
      setPageTitle("create product");
      dispatch({
        type: "SWITCH_INSIGHTS",
        tabLinksId: id,
      });
    }
  };

  return (
    <section className="fixed left-0 w-[280px] h-full shadow-lg bg-white">
      <div className="flex flex-col h-full justify-between py-6 ">
        {/* start profile status info - profile image, product and sales metrics */}
        <ProfileStatusInfo
          fullName={userProfile?.fullName}
          profilePic={userProfile?.profilePic}
        />
        {/* end profile status info - profile image, product and sales metrics */}

        {/* start sidebar links - product, account and insight */}
        <div className="-mt-12">
          <div className="mb-6 font-Poppins">
            {/* start product tab link */}
            <div
              className={`
                        flex 
                        items-center 
                        pl-6
                        mb-6
                        cursor-pointer
                        ${
                          tabIndex === 0
                            ? "bg-nursery text-white py-3 w-[15em] transition-all duration-150 rounded-tr-[16px] rounded-br-[16px]"
                            : "bg-white "
                        }`}
              onClick={() => switchTabs(0)}
            >
              <span>
                <ProductIcon
                  width="w-[1rem]"
                  height="h-[1rem]"
                  color={tabIndex === 0 ? "#fff" : "#323232"}
                />
              </span>
              <span className="text-base ml-4">Products </span>
            </div>
            {/* end product tab link */}

            {/* start account tab link */}
            <div
              className={`
                    flex 
                    items-center 
                    pl-6
                    mb-6
                    cursor-pointer
                    ${
                      tabIndex === 1
                        ? "bg-nursery text-white py-3 w-[15em] transition-all duration-150 rounded-tr-[16px] rounded-br-[16px]"
                        : "bg-white "
                    }`}
              onClick={() => switchTabs(1)}
            >
              <span>
                <AccountIcon color={tabIndex === 1 ? "#fff" : "#323232"} />
              </span>
              <span className="text-base ml-4">Accounts </span>
            </div>
            {/* end account tab link */}

            {/* start insight tab link */}
            {/* <div 
                    className={`
                    flex 
                    items-center 
                    pl-6
                    mb-6
                    cursor-pointer
                    ${ tabIndex === 2 ? 'bg-nursery text-white py-3 w-[15em] transition-all duration-150 rounded-tr-[16px] rounded-br-[16px]' : 'bg-white ' }`} 
                    onClick={() => switchTabs(2)}>
                        <span><InsightIcon color={tabIndex === 2 ? '#fff' : '#323232'}/></span>
                        <span className="text-base ml-4">Insights </span>
                    </div> */}
            {/* end insight tab link */}
          </div>
        </div>
        {/* end sidebar links - product, account and insight */}

        {/* start sidebar links - Help, feedback and log out */}
        <div className="font-Poppins text-base">
          {/* start help and feedback link */}
          {/* <div className="flex items-center pl-6 py-3 cursor-pointer">
                        <span>
                            <HelpIcon color='#4F4F4F'/>
                        </span>
                        <span className="ml-4">Help & Feedback</span>
                    </div> */}
          {/* end help and feedback link */}

          {/* start log out link */}
          <div className="flex items-center pl-6 py-3 cursor-pointer">
            <span>
              <FeedBackIcon color="#4F4F4F" />
            </span>
            <span className="ml-4">Log Out</span>
          </div>
          {/* end log out link */}
        </div>
        {/* end sidebar links - Help, feedback and log out */}
      </div>
    </section>
  );
};

export default DesktopSideBar;
