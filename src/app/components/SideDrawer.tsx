"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Divider, Drawer, List, Typography, ListItemButton } from "@mui/material";
import SideDrawerListItem from "./SideDrawerListItem";

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
      <div className="side-drawer">
        <Box sx={{ margin: "auto", paddingTop: "1em", alignItems: "center", width: drawerWidth - 2 }}>
          <ListItemButton href="/">
            <Typography gutterBottom variant="h5" component="div" align="center" className="site-name">
              Felipe Soares
            </Typography>
          </ListItemButton>
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
          <Divider />
          <List>
            <SideDrawerListItem internal href="http://felipe31.github.io/" src="/images/user.png" text="About me!" />
          </List>
        </Box>
      </div>
    </Drawer>
  );
}
