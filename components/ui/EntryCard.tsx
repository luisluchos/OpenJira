import React from "react";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";

export const EntryCard = () => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>LDescripción</Typography>
        </CardContent>
        <CardActions sx={{display:'flex', justifyContent:'end' ,paddingRight:2}}>
          <Typography variant="body2">hace 10 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
