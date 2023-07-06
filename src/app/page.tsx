"use client";
import styles from "./page.module.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SideDrawer from "./components/SideDrawer";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import CardList from "./components/CardList";
import { Project, getReadMe, parseReadMe } from "@/utilities";
import "./globals.css";

export default async function Home() {
  const list: Project[] = [];

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
  list.push({ ...parseReadMe(await getReadMe("felipe31", "AlfaBooks")), url: "https://github.com/felipe31/AlfaBooks" });
  list.push({
    ...parseReadMe(await getReadMe("felipe31", "questionandanswer")),
    url: "https://github.com/felipe31/questionandanswer",
  });
  const theme = createTheme({
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            // borderStyle: "solid",
            // borderWidth: "1px",
            // borderColor: "var(--color-dark-red)",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          root: {},
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <SideDrawer />
      </header>
      <main className={styles.main}>
        <div className="content">
          <div>
            <h3 className="page-name">Projects</h3>
          </div>
          <CardList resources={list} />
        </div>
      </main>
    </ThemeProvider>
  );
}
