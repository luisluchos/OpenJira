
import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean;
    entryFormOpen: boolean;
    isDragging: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
    openEntryForm: (isOpening: boolean) => void;
    startDragging: () => void;
    stopDragging: () => void;



}


export const UIContext = createContext({} as ContextProps );