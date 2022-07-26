import { FC, useReducer } from "react";
import {v4 as uuidv4} from 'uuid';
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
        _id: uuidv4(),
        description: "initState",
        status:"pending",
        createdAt:Date.now(),
    },
    {
        _id: uuidv4(),
        description: "initState2",
        status:"in-progress",
        createdAt:Date.now(),
    },
    {
        _id: uuidv4(),
        description: "initState3",
        status:"finished",
        createdAt:Date.now(),
    }
  ],
};

export const EntriesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  return <EntriesContext.Provider value={{ ...state }}>{children}</EntriesContext.Provider>;
};
