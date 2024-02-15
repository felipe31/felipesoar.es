"use client";

import { StrictMode, useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SideDrawer from "../components/SideDrawer";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import CardList from "../components/CardList";
import { Project, getReadMe, parseReadMe } from "@/utilities";

import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
const inter = Inter({ subsets: ["latin"] });

async function loadList() {
  const list: Project[] = [];

  list.push({
    ...parseReadMe(await getReadMe("felipe31", "nodejsapi")),
    url: "https://github.com/felipe31/nodejsapi",
  });
  list.push({
    ...parseReadMe(await getReadMe("felipe31", "githubbrowser")),
    url: "https://github.com/felipe31/githubbrowser",
  });
  list.push({
    ...parseReadMe(await getReadMe("felipe31", "quincunx-game")),
    url: "https://github.com/felipe31/quincunx-game",
  });
  list.push({
    ...parseReadMe(await getReadMe("felipe31", "SistemaVotos")),
    url: "https://github.com/felipe31/SistemaVotos",
  });
  list.push({
    ...parseReadMe(await getReadMe("felipe31", "AlfaBooks")),
    url: "https://github.com/felipe31/AlfaBooks",
  });
  list.push({
    ...parseReadMe(await getReadMe("felipe31", "questionandanswer")),
    url: "https://github.com/felipe31/questionandanswer",
  });

  return list;
}

export default function Home() {
  const [list, setList] = useState([] as Project[]);

  useEffect(() => {
    loadList().then((result) => setList(result));
  }, []);

  return (
    <Layout>
      <div>
        <h3 className="page-name">Projects</h3>
      </div>
      <CardList resources={list} />
    </Layout>
  );
}
