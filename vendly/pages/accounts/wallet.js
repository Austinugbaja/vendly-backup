import { useRouter } from "next/router";
import { useContext } from "react";
import { getLayout } from "../../components/layoutscomponent/MainLayout";
import { DisplayMobileHeaderContext } from "../../context/DisplayMobileHeaderContext";

const Wallet = () => {
  const { setToggleMobileHeader } = useContext(DisplayMobileHeaderContext);
  const router = useRouter();

  // go back previous route
  const goBack = () => {
    router.push("/accounts");
    setToggleMobileHeader(true);
  };

  return (
    <>
      {/* start of mobile header */}
      <div className="sm:hidden">
        <div className="flex w-full bg-white justify-between px-3 py-3 text-primary">
          <div onClick={goBack}>
            <svg
              className="w-6 h-6"
              fill="#000"
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
        </div>
        <h2 className="uppercase ml-3 pt-6 pb-7 text-xl font-semibold bg-white">
          my wallet
        </h2>
      </div>
      {/* End of mobile Header */}

      {/* start of my wallet for desktop and mobile */}
      <div className="flex items-center">
        <div className="border-2 border-solid border-green-700 w-full"></div>
        <div className="border-2 border-solid border-red-700 w-full"></div>
      </div>
      {/* end of my wallet for desktop and mobile */}
    </>
  );
};

Wallet.getLayout = getLayout;
export default Wallet;
