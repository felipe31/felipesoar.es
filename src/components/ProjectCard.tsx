"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { Project } from "@/utilities";

export default function ProjectCard(props: { project: Project; position?: "left" | "right" }) {
  return (
    <Card className="card-item">
      <a href={props.project.url} target={props.project.url ? "_blank" : ""}>
        {props.position === "left" && (
          <div className="card-image-container">
            <CardMedia className="card-image" component="img" alt="" image={props.project.img} />
          </div>
        )}
        <CardActionArea>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align="center">
                {props.project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="card-description">
                {props.project.description}
              </Typography>
            </CardContent>
          </Box>
        </CardActionArea>
        {props.position === "right" && (
          <div className="card-image-container">
            <CardMedia className="card-image" component="img" alt="" image={props.project.img} />
          </div>
        )}
      </a>
    </Card>
  );
}
