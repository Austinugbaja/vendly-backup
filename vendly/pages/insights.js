import { useEffect } from "react";
import {
  OrdersIcon,
  ProductIcon,
  SalesIcon,
  WalletIcon,
} from "../components/iconsComponent/Icons";
import MainLayout, {
  getLayout,
} from "../components/layoutscomponent/MainLayout";
import Metric from "../components/profile/Metric";
import PageLinks from "../components/profile/PageLinks";
import NotificationBarContextProvider from "../context/NotificationBarContext";
import TabLinkContextProvider from "../context/TabLinksContext";

const Insights = () => {
  const accountTabsPageLinks = [
    {
      icon: <WalletIcon width="20" height="20" />,
      tabName: "My Wallet",
      id: 1,
      route: "/insights/wallet",
    },
    {
      icon: <OrdersIcon width="20" height="20" />,
      tabName: "Orders",
      id: 2,
      route: "/insights/orders",
    },
    {
      icon: (
        <SalesIcon
          width="w-[1.4rem]"
          height="h-[1.4rem]"
          color="text-[#0055D4]"
        />
      ),
      tabName: "Sales",
      id: 3,
      route: "/insights/sales",
    },
    {
      icon: <ProductIcon width="w-[1rem]" height="h-[1rem]" color="#0055D4" />,
      tabName: "Products",
      id: 4,
      route: "/insights/products",
    },
  ];

  return (
    <div className="w-full px-3 sm:px-6 mt-[21.9rem] sm:mt-6">
      {/* visitors and reviews metrics */}
      <Metric
        visitorsValues="20"
        metricTypeOne="products"
        reviewsValues="200"
        metricTypeTwo="sales"
      />

      {/* start profile, business information, bank details and contact details */}
      <PageLinks accountTabsPageLinks={accountTabsPageLinks} />
      {/* end profile, business information, bank details and contact details */}
    </div>
  );
};

Insights.getLayout = getLayout;
export default Insights;
