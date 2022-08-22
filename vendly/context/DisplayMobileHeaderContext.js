import { createContext, useState } from "react";

export const DisplayMobileHeaderContext = createContext(true);

const DisplayMobileHeaderProvider = (props) => {
  const [mobileHeader, setToggleMobileHeader] = useState(true);

  return (
    <DisplayMobileHeaderContext.Provider
      value={{ mobileHeader, setToggleMobileHeader }}
    >
      {props.children}
    </DisplayMobileHeaderContext.Provider>
  );
};

export default DisplayMobileHeaderProvider;
