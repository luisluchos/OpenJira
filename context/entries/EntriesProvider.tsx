import { log } from "console";
import { FC, useEffect, useReducer } from "react";
import entriesApi from "../../api/entriesApi";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", { description });
    dispatch({ type: "[Entry] Add-Entry", payload: data });
  };

  //udateEntry, destrctramos el entry que le estamos pasasndo en  _id, description, status
  const updateEntry = async ({ _id, description, status }: Entry) => {
    console.log("updateEntry", _id, description, status);
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });
      dispatch({ type: "[Entry] Update-Entry", payload: data });
      console.log("response", data);
    } catch (error) {
      console.log({ error });
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "[Entry] Refesh-Entries", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
