"use client";
import styles from "./page.module.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SideDrawer from "./components/SideDrawer";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import CardList from "./components/CardList";
import { getReadMe } from "@/utilities";
import { useState } from "react";

export default async function Home() {
  const list = [
    {
      img: "/lizard.jpg",
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      img: "/lizard.jpg",
      title: "Project 2",
      description:
        "Lorem atur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  // await getReadMe("");

  return (
    <main className={styles.main}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideDrawer />
        <div>
          <div>
            <h3>Projects</h3>
          </div>
          <CardList resources={list} />
        </div>
      </Box>
    </main>
  );
}
