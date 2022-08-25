import {
  BankDetailsIcon,
  BusinessInfoIcon,
  ContactIcon,
  HealthIcon,
  WalletIcon,
} from "../components/iconsComponent/Icons";
import MainLayout, {
  getLayout,
} from "../components/layoutscomponent/MainLayout";
import Metric from "../components/profile/Metric";
import PageLinks from "../components/profile/PageLinks";
import NotificationBarContextProvider from "../context/NotificationBarContext";
import TabLinkContextProvider from "../context/TabLinksContext";

const Accounts = () => {
  const accountTabsPageLinks = [
    {
      icon: <HealthIcon width="25" height="25" />,
      tabName: "Profile",
      id: 1,
      route: "/accounts/profile",
    },
    // { icon: <BusinessInfoIcon width="25" height="25" />, tabName: 'Business Information', id: 2, route: '/accounts/business_information'},
    {
      icon: <BankDetailsIcon width="25" height="23" />,
      tabName: "Bank Details",
      id: 3,
      route: "/accounts/bank_details",
    },
    {
      icon: <ContactIcon width="22" height="24" />,
      tabName: "Contact Details",
      id: 4,
      route: "/accounts/contact_details",
    },
    {
      icon: <WalletIcon width="20" height="20" />,
      tabName: "My Wallet",
      id: 5,
      route: "/accounts/wallet",
    },
  ];

  return (
    <div className="mt-[21.9rem] sm:mt-0">
      <div className="w-full sm:px-6 px-3">
        {/* visitors and reviews metrics */}
        {/* <Metric 
                visitorsValues='20'
                metricTypeOne='visitors'
                reviewsValues='4.2k'
                metricTypeTwo='reviews'
                /> */}

        {/* start profile, business information, bank details and contact details */}
        <PageLinks accountTabsPageLinks={accountTabsPageLinks} />
        {/* end profile, business information, bank details and contact details */}
      </div>
    </div>
  );
};

Accounts.getLayout = getLayout;

export default Accounts;
