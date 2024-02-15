import CardList from "@/components/CardList";
import { Project } from "@/utilities";
import Layout from "@/components/Layout";

export default function AboutMe() {
  const list: Project[] = [];
  list.push({
    img: "",
    title: "Tools",
    description:
      "C/C++ | Typescript | Java | PostgreSQL | Node.js | React | Docker | AWS | GCP | Linux",
    url: "",
  });
  list.push({
    img: "",
    title: "Software Developer @ Amy.app",
    description: `• Seamless migration from Firestore to PostgreSQL, with a flawless transition.

• SQL query optimization with 85% reduction in execution time.

• Standardized 21 endpoints and their structures through the refactoring of a REST API.

• Implemented a GitHub Actions CI pipeline to run tests for a React project.

• Developed custom Math.js functions using TDD and advanced tree structures.`,
    url: "",
  });

  list.push({
    img: "",
    title: "Software Developer",
    description: `• Maintained a modified fork of Libbitcoin, a C++ library, for approximately two years.

• Delivered a mockup mobile application with the NativeScript framework.

• Implemented a REST API using Javascript and Node.js.

• Built other proof-of-concept projects to decide whether to use a new language, such as Lisp.`,
    url: "",
  });

  list.push({
    img: "",
    title: "Funding Software Developer @ Oops Cupom",
    description: `• Implemented an Android application written in Java.

• Developed a landing page using PHP connected to DynamoDB.

• Integrated an IBM Watson instance with Facebook Messages using web sockets.

• Structured the project’s development processes.`,
    url: "",
  });

  list.push({
    img: "",
    title: "Academic",
    description: `
M.Sc., Information Systems: Polytechnic Institute of Bragança - 2018 – 2019
B.Sc., Computer Science: Federal University of Technology – Paraná - 2014 – 2017

Fluent in English and Portuguese.`,
    url: "",
  });

  return (
    <Layout>
      <div>
        <h3 className="page-name">Hello there, I&apos;m Felipe</h3>
      </div>
      <CardList resources={list} />
    </Layout>
  );
}
