"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { Project } from "@/utilities";

export default function ProjectCard(props: { project: Project; position?: "left" | "right" }) {
  return (
    <a href={props.project.url} target="_blank">
      <Card sx={{ width: 600, height: 200, display: "flex", my: 5 }}>
        {props.position === "left" && (
          <CardMedia component="img" alt="green iguana" sx={{ width: 200 }} image={props.project.img} />
        )}
        <CardActionArea>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align="center">
                {props.project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.project.description}
              </Typography>
            </CardContent>
          </Box>
        </CardActionArea>
        {props.position === "right" && (
          <CardMedia component="img" alt="green iguana" sx={{ width: 200 }} image={props.project.img} />
        )}
      </Card>
    </a>
  );
}
