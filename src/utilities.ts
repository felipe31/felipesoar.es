export interface Project {
  img: string;
  title: string;
  description: string;
  url: string;
}

export async function getReadMe(user: string, repo: string) {
  let url = `https://raw.githubusercontent.com/${user}/${repo}/`;
  let readMe = "";
  const possibleBranches = ["main", "master"];
  for (const branch of possibleBranches) {
    try {
      const res = await fetch(`${url}${branch}/README.md`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      readMe = await res.text();
      url = `${url}${branch}/`;
      break;
    } catch (e) {}
  }

  // console.log(text);
  return { readMe, url };
}

export function parseReadMe(props: { readMe: string; url: string }): Project {
  const _toReturn = {
    img: "/images/keyboard.jpg",
    title: "Title here",
    description: "Description here",
    url: "",
  };

  // Parse title
  console.log("Parse title");
  const titleRegex = new RegExp(/(?:^##?\s)([\s\S]*?)(?:(\s!\[.*?)?(\n))/);
  if (titleRegex.test(props.readMe)) {
    const res = titleRegex.exec(props.readMe);
    if (res) {
      _toReturn.title = res[1];
    }
  }
  console.log(titleRegex.test(props.readMe));

  // Parse description
  console.log("Parse description");
  const descriptionRegex = new RegExp(/(?:^(?:\n|\r))*(^[^#][\s\S]*?)(?:(\n|\r))/m);
  if (descriptionRegex.test(props.readMe)) {
    const res = descriptionRegex.exec(props.readMe);
    if (res) {
      _toReturn.description = res[1];
    }
  }
  console.log(descriptionRegex.test(props.readMe));

  // Parse image
  console.log("Parse image");
  const imageRegex = new RegExp(/(?:^\![\s\S]+?\()(.*?)(?:\))/m);
  if (imageRegex.test(props.readMe)) {
    const res = imageRegex.exec(props.readMe);
    if (res) {
      _toReturn.img = res[1];
    }
    console.log(res);
    if (_toReturn.img.startsWith("./")) {
      _toReturn.img = `${props.url}${_toReturn.img}`;
    }
  }
  console.log(imageRegex.test(props.readMe));

  console.log(_toReturn);
  return _toReturn;
}
