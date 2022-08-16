import { useContext } from "react";
import { NotificationBarContext } from "../../../context/NotificationBarContext";
import styles from "../../../styles/NotificationSidebar.module.css";

import { CloseIcon } from "../../iconsComponent/Icons";

const NotificationSideBar = () => {
  const { toggle, dispatch } = useContext(NotificationBarContext);

  // close the notification sidebar
  const closeNotificationSidebar = () => {
    dispatch({
      type: "CLOSE_NOTIFICATION",
    });
  };

  return (
    <section
      className={`${styles.sidebar} ${styles.scroll} ${
        toggle ? "w-[280px] transition-all" : "w-0"
      } box-content`}
    >
      <div>
        {/* start notification title text and close button */}
        <div className="sticky top-0 flex justify-between items-center border-b-[1px] border-[#DEDEDE] px-6 py-9 pt-5 mb-2 bg-white">
          {/* start Notification text title */}
          <h1 className="font-Raleway font-[600] text-secondary text-[17px]">
            Notification
          </h1>
          {/* end Notification text title */}

          {/* start close button for notification sidebar */}
          <button
            onClick={closeNotificationSidebar}
            className="inline-flex items-center h-10 px-2 text-indigo-100 bg-[#F4F4FF] rounded-lg focus:shadow-outline"
          >
            <CloseIcon color="#2B2B2B" width="15" height="15" />
            <span className="ml-2 font-Raleway text-secondary font-[700] text-base">
              Close
            </span>
          </button>
          {/* end close button for notification sidebar */}
        </div>

        {/* start notification boxes title text and close button */}
        <div className="grid grid-cols-1 divide-y px-6">
          {[1, 2, 3, 4, 5, 6, 7].map((notification) => (
            <div key={notification} className="py-5 ">
              {/* start notification title and time */}
              <div className="flex items-center justify-between mb-1">
                {/* Notification title */}
                <h1 className="text-base font-Raleway font-[600] text-tetiary">
                  New Order
                </h1>

                {/* notification time */}
                <h3 className="font-Poppins text-[10px]  text-secondary">
                  2 hours ago
                </h3>
              </div>
              {/* end notification title and time */}

              {/* start notification text information */}
              <p className="text-sm font-Poppins text-secondary">
                Hurray! you’ve Received Payment for order #1235678
              </p>
              {/* end notification text information */}
            </div>
          ))}
        </div>
        {/* end notification boxes title text and close button */}
      </div>
    </section>
  );
};

export default NotificationSideBar;
