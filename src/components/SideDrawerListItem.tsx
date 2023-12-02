"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";

export default function SideDrawerListItem(props: { text: string; src: string; href: string; internal?: boolean }) {
  return (
    <ListItem key={props.text} disablePadding>
      <ListItemButton href={props.href} target={props.internal ? "" : "_blank"}>
        <ListItemAvatar>
          <Avatar src={props.src} sx={{ height: "30px", width: "30px" }} />
        </ListItemAvatar>
        <ListItemText primary={props.text} />
      </ListItemButton>
    </ListItem>
  );
}
