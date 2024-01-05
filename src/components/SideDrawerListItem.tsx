"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function SideDrawerListItem(props: {
  text?: string;
  src: string;
  href: string;
  internal?: boolean;
  highlight?: boolean;
  horizontal?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <ListItem
      key={props.text}
      disablePadding
      className={props.highlight ? "highlight-background" : ""}
      sx={
        props.horizontal
          ? {
              width: "fit-content",
              borderRadius: "10px",
            }
          : {}
      }
    >
      <ListItemButton
        href={props.href}
        target={props.internal ? "" : "_blank"}
        onClick={props.onClick}
        sx={{
          minWidth: "fit-content",
          ...(props.horizontal ? { borderRadius: "10px" } : {}),
        }}
      >
        <ListItemAvatar
          sx={{
            minWidth: "fit-content",
          }}
        >
          <Avatar src={props.src} sx={{ height: "30px", width: "30px" }} />
        </ListItemAvatar>
        {!!props.text && (
          <ListItemText primary={props.text} sx={{ paddingLeft: "26px" }} />
        )}
      </ListItemButton>
    </ListItem>
  );
}
