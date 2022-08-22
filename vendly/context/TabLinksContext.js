import { createContext, useReducer } from "react";
import TabLinkReducer from "../reducers/TabLinksReducers";

export const TabListContext = createContext(0);

const TabLinkContextProvider = (props) => {
  const [tabIndex, dispatch] = useReducer(TabLinkReducer, 0);

  return (
    <TabListContext.Provider value={{ tabIndex, dispatch }}>
      {props.children}
    </TabListContext.Provider>
  );
};

export default TabLinkContextProvider;
