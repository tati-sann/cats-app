import React, {FC} from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {ICats} from "../types/types";

interface CateCardProps {
  cat: ICats;
}

const CatsCard: FC<CateCardProps> = ({cat}: CateCardProps) => {
  return (
    <Grid item md={3}>
      <Card>
        <CardMedia
          component="img"
          image={`${cat.img}`}
          alt={`image ${cat.name}`}
          height="300"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cat.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cat.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default CatsCard;
