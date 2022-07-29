import React, { useContext } from "react";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { Entry } from "../../interfaces";
import { UIContext } from "../../context/ui";
import { useRouter } from "next/router";
import { dateFunctions } from "../../utils";

interface Props {
  entry: Entry;
}

export const EntryCard = ({ entry }: Props) => {
  const { startDragging, stopDragging } = useContext(UIContext);
  const router = useRouter();

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("entryID", entry._id);

    startDragging();
  };

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    stopDragging();
  };

  const onClick = () => {
    router.push(`/entries/${entry._id}`);
  }

  return (
    <Card onClick={onClick} sx={{ marginBottom: 1 }} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}>
          <Typography variant="body2">{dateFunctions.getFormattedDate(entry.createdAt)}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
