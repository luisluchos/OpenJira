import React, { useContext } from "react";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { Entry } from "../../interfaces";
import { UIContext } from "../../context/ui";

interface Props {
  entry: Entry;
}

export const EntryCard = ({ entry }: Props) => {
  const { startDragging, stopDragging } = useContext(UIContext);

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("entryID", entry._id);

    startDragging();
  };

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    stopDragging();
  };

  return (
    <Card sx={{ marginBottom: 1 }} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}>
          <Typography variant="body2">hace 10 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
