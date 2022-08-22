import { createContext, useReducer, useRef } from "react";
import NotificationBarReducer from "../reducers/NotificationBarReducer";

export const NotificationBarContext = createContext(false);

const NotificationBarContextProvider = (props) => {
  const [toggle, dispatch] = useReducer(NotificationBarReducer, false);

  return (
    <NotificationBarContext.Provider value={{ toggle, dispatch }}>
      {props.children}
    </NotificationBarContext.Provider>
  );
};

export default NotificationBarContextProvider;
