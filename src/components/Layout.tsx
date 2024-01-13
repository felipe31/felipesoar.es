import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import styles from "../styles/page.module.css";

import { Inter } from "next/font/google";
import SideDrawer from "./SideDrawer";
import { TopDrawer } from "./TopDrawer";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
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
    <div className={inter.className}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <header>
          <SideDrawer />
          <TopDrawer />
        </header>
        <main className={styles.main}>
          <div className="content">{children}</div>
        </main>
      </ThemeProvider>
    </div>
  );
}
