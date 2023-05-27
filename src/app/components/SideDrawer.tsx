"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Avatar, Box, Divider, Drawer, List, Typography } from "@mui/material";
import SideDrawerListItem from "./SideDrawerListItem";
import { auto } from "@popperjs/core";

const drawerWidth = 250;

export default function SideDrawer() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ my: "auto", alignItems: "center", width: drawerWidth }}>
        {/* <Avatar
          src="https://www.gravatar.com/avatar/682b7d12eff096b4d35ee3437020e081"
          sx={{ height: "100px", width: "100px", alignSelf: "center", mx: "auto", my: 4 }}
        /> */}
        <Typography gutterBottom variant="h5" component="div" align="center">
          Felipe Soares
        </Typography>
        <Divider />
        <List>
          <SideDrawerListItem href="https://github.com/Felipe31" src="/images/github.png" text="Github" />
          <SideDrawerListItem
            href="https://www.linkedin.com/in/felipe31soares/"
            src="/images/linkedin.png"
            text="Linkedin"
          />
          <SideDrawerListItem
            href="https://drive.google.com/file/d/1-9ATtaSIhzXySCv7H--xVisxy64oUy6q/view?usp=sharing"
            src="/images/cv.png"
            text="Curriculum Vitae"
          />
          <SideDrawerListItem href="mailto:felipe31soares@gmail.com" src="/images/email.png" text="Email" />
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}
