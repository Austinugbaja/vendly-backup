import { useRouter } from "next/router";
import { useContext } from "react";
import { getLayout } from "../../components/layoutscomponent/MainLayout";
import { DisplayMobileHeaderContext } from "../../context/DisplayMobileHeaderContext";

const Profile = () => {
  const { setToggleMobileHeader } = useContext(DisplayMobileHeaderContext);
  const router = useRouter();

  // go back previous route
  const goBack = () => {
    router.push("/accounts");
    setToggleMobileHeader(true);
  };

  return (
    <div className="flex w-full justify-between px-3 py-3 text-primary sm:hidden">
      <div onClick={goBack}>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div>save</div>
    </div>
  );
};

Profile.getLayout = getLayout;
export default Profile;
