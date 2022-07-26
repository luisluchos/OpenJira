import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface UIState {
  sidemenuOpen: boolean;
  entryFormOpen: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  entryFormOpen: false,
  isDragging: false,
};

export const UIProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  const openEntryForm = (isOpening: boolean) => {
    dispatch({ type: "UI - Open Entry Form", payload: isOpening });
  };

  const startDragging = () => {
    dispatch({ type: "UI - Start Dragging" });
  };

  const stopDragging = () => {
    dispatch({ type: "UI - End Dragging" });
  };

  return (
    <UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu, openEntryForm, startDragging, stopDragging }}>
      {children}
    </UIContext.Provider>
  );
};
