"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function ProjectCard(props: {
  img: string;
  title: string;
  description: string;
  position?: "left" | "right";
}) {
  return (
    <Card sx={{ width: 600, height: 200, display: "flex" }}>
      {props.position === "left" && (
        <CardMedia component="img" alt="green iguana" sx={{ width: 200 }} image={props.img} />
      )}
      <CardActionArea>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="center">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
      {props.position === "right" && (
        <CardMedia component="img" alt="green iguana" sx={{ width: 200 }} image={props.img} />
      )}
    </Card>
  );
}
