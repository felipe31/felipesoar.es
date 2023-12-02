import styles from "../styles/page.module.css";
import SideDrawer from "@/components/SideDrawer";
import { CssBaseline } from "@mui/material";
import { Inter } from "next/font/google";
import CardList from "@/components/CardList";
import { Project } from "@/utilities";
const inter = Inter({ subsets: ["latin"] });

export default function AboutMe() {
  const list: Project[] = [];

  list.push({
    img: "/images/books.jpg",

    title: "Academic",
    description:
      "I have a Master's degree in Information Systems from the Polytechnic Institute of Bragança, Portugal. I also hold a Bachelor's degree in Computer Science from the Federal University of Technology – Paraná, Brazil.",
    url: "",
  });
  list.push({
    img: "",
    title: "Tools",
    description: "C/C++ | Typescript | Java | PostgreSQL | Node.js | React | Docker | AWS | GCP | Linux",
    url: "",
  });

  return (
    <div className={inter.className}>
      <CssBaseline />
      <header>
        <SideDrawer />
      </header>
      <main className={styles.main}>
        <div className="content">
          <div>
            <h3 className="page-name">Hello there, I&apos;m Felipe</h3>
          </div>
          <CardList resources={list} />
        </div>
      </main>
    </div>
  );
}
