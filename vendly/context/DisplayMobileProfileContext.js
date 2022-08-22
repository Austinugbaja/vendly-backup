import { createContext, useState, useEffect } from "react";

export const DisplayMobileProfileContext = createContext(true);

const DisplayMobileProfileProvider = (props) => {
  const [displayMobileProfile, setDisplayMobileProfile] = useState(true);

  useEffect(() => {
    ["load", "scroll", "resize"].forEach((e) =>
      window.addEventListener(e, handleScroll)
    );
    return () =>
      ["load", "scroll", "resize"].forEach((e) =>
        window.removeEventListener(e, handleScroll)
      );
    // eslint-disable-next-line
  }, []);

  function handleScroll() {
    if (window.scrollY > 2) {
      setDisplayMobileProfile(false);
    } else {
      setDisplayMobileProfile(true);
    }
  }

  return (
    <DisplayMobileProfileContext.Provider
      value={{ displayMobileProfile, setDisplayMobileProfile }}
    >
      {props.children}
    </DisplayMobileProfileContext.Provider>
  );
};

export default DisplayMobileProfileProvider;
