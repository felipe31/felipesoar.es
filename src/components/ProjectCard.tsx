"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { Project } from "@/utilities";
import { useRouter } from "next/router";

export default function ProjectCard(props: {
  project: Project;
  position?: "left" | "right";
}) {
  const router = useRouter();
  const nav = (e: any, path: string) => {
    e.preventDefault();
    if (path.startsWith("https://")) {
      window.open(path, "_blank");
    } else router.push(path);
  };
  return (
    <Card className="card-item" onClick={(e: any) => nav(e, props.project.url)}>
      <a>
        {props.position === "left" && (
          <div className="card-image-container">
            <CardMedia
              className="card-image"
              component="img"
              alt=""
              image={props.project.img}
            />
          </div>
        )}
        <CardActionArea>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {props.project.title}
              </Typography>
              <Box
                sx={{ whiteSpace: "pre-wrap" }}
                color="text.secondary"
                className="card-description"
              >
                {props.project.description}
              </Box>
            </CardContent>
          </Box>
        </CardActionArea>
        {props.position === "right" && (
          <div className="card-image-container">
            <CardMedia
              className="card-image"
              component="img"
              alt=""
              image={props.project.img}
            />
          </div>
        )}
      </a>
    </Card>
  );
}
