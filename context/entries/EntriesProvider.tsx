import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
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
      description: "pending",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "in progress",
      status: "in-progress",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "finished",
      status: "finished",
      createdAt: Date.now(),
    },
  ],
};

export const EntriesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description: description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {

    dispatch({ type: "[Entry] Update-Entry", payload: entry });}

  return <EntriesContext.Provider value={{ ...state , addNewEntry, updateEntry }}>{children}</EntriesContext.Provider>;
};
