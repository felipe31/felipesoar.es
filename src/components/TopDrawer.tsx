import { Box, Divider, List, ListItemButton, Typography } from "@mui/material";
import SideDrawerListItem from "@/components/SideDrawerListItem";
import { useRouter } from "next/router";

export function TopDrawer() {
  const router = useRouter();
  const internalNav = (e: any, path: string) => {
    e.preventDefault();
    router.push(path);
  };
  return (
    <div className="top-drawer">
      <Box sx={{ margin: "auto", width: "100vw" }}>
        <ListItemButton href="/" onClick={(e: any) => internalNav(e, "/")}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="site-name"
          >
            Felipe Soares
          </Typography>
        </ListItemButton>
        <Divider />

        <List
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: 0,
            paddingX: "20px",
          }}
        >
          <SideDrawerListItem
            internal
            href="/about-me"
            src="/images/user.png"
            horizontal
            onClick={(e: any) => internalNav(e, "/about-me")}
          />
          <SideDrawerListItem
            href="https://github.com/Felipe31"
            src="/images/github.png"
            horizontal
          />
          <SideDrawerListItem
            href="https://www.linkedin.com/in/felipe31soares/"
            src="/images/linkedin.png"
            horizontal
          />
          <SideDrawerListItem
            href="https://drive.google.com/file/d/1c2_OZb44OMPTVtyfaEvP_8OjANROhbZ1/view?usp=sharing"
            src="/images/cv.png"
            horizontal
          />
          <SideDrawerListItem
            href="mailto:me@felipesoar.es"
            src="/images/email.png"
            highlight
            horizontal
          />
        </List>
        <Divider />
      </Box>
    </div>
  );
}
