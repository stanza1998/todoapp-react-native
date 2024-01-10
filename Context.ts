/* eslint-disable */

import { createContext, useContext } from "react";
import AppStore from "./back-end/store/AppStore";
import AppApi from "./back-end/apis/AppApi";
// Context to contain device width
export const DeviceWidthContext = createContext(0);

interface AppContextType {
  store: AppStore;
  api: AppApi;
//   ui: UiStore;
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};

export const AppContext = createContext<null | AppContextType>(null);
