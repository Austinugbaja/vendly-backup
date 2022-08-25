import { useRouter } from "next/router";
import { useContext } from "react";
import { getLayout } from "../../components/layoutscomponent/MainLayout";
import { DisplayMobileHeaderContext } from "../../context/DisplayMobileHeaderContext";

const ContactDetails = () => {
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
          <div className="capitalize">save</div>
        </div>
        <h2 className="uppercase ml-3 pt-6 pb-7 text-xl font-semibold bg-white">
          contact details
        </h2>
      </div>

      {/* End of mobile Header */}

      {/* start of contact details form desktop and mobile */}
      <div className="w-full p-4 bg-white shadow-[0px 0px 8px 2px rgba(7, 7, 136, 0.07)] rounded-lg sm:border-2">
        {/* first input selection */}
        <div className="flex items-center rounded-md border-solid border-2 border-gray-200">
          <div>
            <select className="w-full p-2 rounded-md bg-[#F4F4FF] text-gray-400">
              <option value="1">+234</option>
              <option value="2">+44</option>
              <option value="3">+1</option>
              <option value="4">+33</option>
            </select>
          </div>
          <div className="flex-1 border-l border-gray-200">
            <input
              className="w-full p-2 border-none"
              type="email"
              placeholder="Enter Email Address"
            />
          </div>
        </div>
        {/* Second input selection */}
        <div className="mt-5">
          <input
            className="w-full p-2 rounded-md border-solid border-2 border-gray-200"
            type="email"
            placeholder="Enter Email Address"
          />
        </div>
        {/* Third input selection */}
        <div className="mt-5">
          <input
            className="w-full p-2 rounded-md border-solid border-2 border-gray-200"
            type="text"
            placeholder="Enter Whatsapp Url"
          />
        </div>

        <div className="sm:mt-36 mt-40 mb-14 flex justify-center">
          <button className="h-10 font-semibold px-5 sm:py-0 py-6 text-indigo-100 bg-primary rounded-md text-[13px] flex justify-center w-full sm:w-[15rem] items-center uppercase">
            save
          </button>
        </div>
      </div>
      {/* end of contact details form desktop and mobile */}
    </>
  );
};

ContactDetails.getLayout = getLayout;

export default ContactDetails;
