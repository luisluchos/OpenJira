import { List, Paper } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { EntryCard } from "./EntryCard";
import { EntryStatus } from "../../interfaces/entry";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";
import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList = ({ status }: Props) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, stopDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("entryID");
    console.log("drop", id);

    const entry = entries.find((entry) => entry._id === id)!; // ! is a safe way to get the entry
    updateEntry({ ...entry, status: status });
    stopDragging()
  };

  return (
    <div onDrop={onDropEntry} onDragOver={allowDrop} className={isDragging ? styles.dragging : ""}>
      <Paper
        sx={{
          height: "calc(100vh)",
          backgroundColor: "transparent",
          padding: "3px 5px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
