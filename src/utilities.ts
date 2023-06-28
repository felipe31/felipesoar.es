export interface Project {
  img: string;
  title: string;
  description: string;
}

export async function getReadMe(repoURL: string) {
  const res = await fetch(`https://raw.githubusercontent.com/felipe31/githubbrowser/main/README.md`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  console.log(res.body);
  return res.body;
}

export function parseReadMe(readMe: string): Project {
  return { img: "", title: "", description: "" };
}
